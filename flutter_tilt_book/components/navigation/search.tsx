"use client"

import { useEffect, useMemo, useState } from "react"
import { LuFileText, LuSearch } from "react-icons/lu"

import { advanceSearch, highlight, type search } from "@/lib/search-data-utils"
import { cn, debounce } from "@/lib/utils"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import Anchor from "@/components/navigation/anchor"

interface Document {
  title?: string
  href?: string
  spacer?: boolean
  items?: Document[]
  noLink?: boolean
}

interface localeDictionaries {
  title: string
  placeholder: string
  atLeastChars: string
  searching: string
  noResults: string
}

export default function Search({
  locale,
  localeDictionaries,
  documentRoutes,
}: {
  locale: string
  localeDictionaries: localeDictionaries
  documentRoutes: Document[]
}) {
  const [searchedInput, setSearchedInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [filteredResults, setFilteredResults] = useState<search[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const debouncedSearch = useMemo(
    () =>
      debounce((input: string) => {
        setIsLoading(true)
        const results = advanceSearch(locale, input.trim())
        setFilteredResults(results)
        setIsLoading(false)
      }, 300),
    [locale]
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Enter" && filteredResults.length > 2) {
        const selected = filteredResults[0]
        if ("href" in selected) {
          window.location.href = `/${locale}/docs${selected.href}`
          setIsOpen(false)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [locale, isOpen, filteredResults])

  useEffect(() => {
    if (searchedInput.length >= 2) {
      debouncedSearch(searchedInput)
    } else {
      setFilteredResults([])
    }
  }, [searchedInput, debouncedSearch])

  function renderDocuments(
    documents: Document[],
    parentHref: string = `/${locale}/docs`
  ): React.ReactNode[] {
    if (!Array.isArray(documents) || documents.length === 0) {
      return []
    }

    return documents.flatMap((doc) => {
      if ("spacer" in doc && doc.spacer) {
        return []
      }

      const href = doc.href ? `${parentHref}${doc.href}` : ""

      return [
        !doc.noLink && doc.href && (
          <DialogClose key={href} asChild>
            <Anchor
              className={cn(
                "flex w-full items-center gap-2.5 rounded-sm px-3 text-[15px] transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              )}
              href={href}
            >
              <div className="flex h-full w-fit items-center gap-1.5 py-3 whitespace-nowrap">
                <LuFileText className="h-[1.1rem] w-[1.1rem]" /> {doc.title}
              </div>
            </Anchor>
          </DialogClose>
        ),

        ...renderDocuments(
          doc.items?.filter((item) => !item.noLink) || [],
          `${href}`
        ),
      ]
    })
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open)
          if (!open) {
            setTimeout(() => setSearchedInput(""), 200)
          }
        }}
      >
        <DialogTrigger asChild>
          <div className="relative max-w-md flex-1 cursor-pointer">
            <LuSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
            <Input
              className="bg-background h-9 w-full rounded-md border pr-4 pl-10 text-sm shadow md:w-full"
              placeholder={localeDictionaries.title}
              type="search"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="top-[45%] max-w-xs p-0 sm:top-[38%] sm:max-w-lg">
          <DialogTitle className="sr-only">
            {localeDictionaries.title}
          </DialogTitle>
          <DialogHeader>
            <input
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              placeholder={localeDictionaries.placeholder}
              autoFocus
              className="h-14 border-b bg-transparent px-4 text-[15px] outline-none"
            />
          </DialogHeader>
          {searchedInput.length > 0 && searchedInput.length < 2 && (
            <p className="text-warning mx-auto mt-2 text-sm">
              {localeDictionaries.atLeastChars}
            </p>
          )}
          {isLoading ? (
            <p className="text-muted-foreground mx-auto mt-2 text-sm">
              {localeDictionaries.searching}
            </p>
          ) : (
            filteredResults.length === 0 &&
            searchedInput.length >= 2 && (
              <p className="text-muted-foreground mx-auto mt-2 text-sm">
                {localeDictionaries.noResults}{" "}
                <span className="text-primary">{`"${searchedInput}"`}</span>
              </p>
            )
          )}
          <ScrollArea className="max-h-[350px] w-full overflow-hidden">
            <div className="flex w-full flex-col items-start px-1 pt-1 pb-4 sm:px-3">
              {searchedInput
                ? filteredResults.map((item) => {
                    if ("href" in item) {
                      return (
                        <DialogClose key={item.href} asChild>
                          <Anchor
                            className={cn(
                              "flex w-full max-w-[310px] flex-col gap-0.5 rounded-sm p-3 text-[15px] transition-all duration-300 hover:bg-zinc-100 sm:max-w-[480px] dark:hover:bg-zinc-900"
                            )}
                            href={`/${locale}/docs${item.href}`}
                          >
                            <div className="flex h-full items-center gap-x-2">
                              <LuFileText className="h-[1.1rem] w-[1.1rem]" />
                              <span className="truncate">{item.title}</span>
                            </div>
                            {"snippet" in item && item.snippet && (
                              <p
                                className="truncate text-xs text-zinc-500 dark:text-zinc-400"
                                dangerouslySetInnerHTML={{
                                  __html: highlight(
                                    item.snippet,
                                    searchedInput
                                  ),
                                }}
                              />
                            )}
                          </Anchor>
                        </DialogClose>
                      )
                    }
                    return null
                  })
                : renderDocuments(documentRoutes)}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
