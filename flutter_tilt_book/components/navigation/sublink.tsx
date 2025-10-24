"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LuChevronDown, LuChevronRight } from "react-icons/lu"

import { Paths } from "@/lib/pageroutes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { SheetClose } from "@/components/ui/sheet"
import Anchor, {
  AnchorNavActiveStyle,
  AnchorNavStyle,
} from "@/components/navigation/anchor"

function isRoute(
  item: Paths
): item is Extract<Paths, { title: string; href: string }> {
  return "title" in item && "href" in item
}

export default function SubLink({
  locale,
  pathProps,
}: {
  locale: string
  pathProps: Paths & { level: number; isSheet: boolean }
}) {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(
    isRoute(pathProps) ? pathProps.isSubOpen : false
  )

  useEffect(() => {
    if (isRoute(pathProps)) {
      if (
        pathProps.href &&
        path !== pathProps.href &&
        path.includes(pathProps.href)
      ) {
        requestAnimationFrame(() => setIsOpen(true))
      } else {
        requestAnimationFrame(() => setIsOpen(pathProps.isSubOpen ?? true))
      }
    }
  }, [path, pathProps])

  if (!isRoute(pathProps)) {
    return null
  }

  const { title, href, items, noLink, level, isSheet } = pathProps

  const Comp = (
    <Anchor
      className={AnchorNavStyle}
      activeClassName={AnchorNavActiveStyle}
      href={href}
    >
      {title}
    </Anchor>
  )

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h2 className="text-primary font-medium sm:text-sm">{title}</h2>
  )

  if (!items) {
    return <div className="flex flex-col text-sm">{titleOrLink}</div>
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="cursor-pointer" asChild>
          <div className="mr-5 flex items-center gap-2 text-sm">
            {titleOrLink}
            <Button
              className="ml-auto h-6 w-6 cursor-pointer"
              variant="link"
              size="icon"
            >
              {!isOpen ? (
                <LuChevronRight className="h-[0.9rem] w-[0.9rem]" />
              ) : (
                <LuChevronDown className="h-[0.9rem] w-[0.9rem]" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          <div
            className={cn(
              "mt-1 ml-2.5 flex flex-col items-start gap-1 border-l pl-2",
              level > 0 && "ml-2.5 border-l pl-2"
            )}
          >
            {items?.map((innerLink) => {
              if (!isRoute(innerLink)) {
                return null
              }

              const modifiedItems = {
                ...innerLink,
                href: `${href}${innerLink.href}`,
                level: level + 1,
                isSheet,
              }

              return (
                <SubLink
                  key={modifiedItems.href}
                  locale={locale}
                  pathProps={modifiedItems}
                />
              )
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
