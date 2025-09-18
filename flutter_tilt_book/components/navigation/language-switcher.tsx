"use client"

import { usePathname } from "next/navigation"
import { RiTranslate2 } from "react-icons/ri"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher({ basePath }: { basePath?: string }) {
  const pathname = usePathname()

  function getRestPath() {
    const rest = pathname.split(`/`).slice(2).join("/")
    return rest ? `/${rest}` : "/"
  }

  const restPath = getRestPath()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 cursor-pointer"
          aria-label="Switch Language"
        >
          <RiTranslate2 className="h-[1.1rem] w-[1.1rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <a href={`${basePath}/en${restPath}`}>
          <DropdownMenuItem className="cursor-pointer">
            English
          </DropdownMenuItem>
        </a>
        <a href={`${basePath}/zh${restPath}`}>
          <DropdownMenuItem className="cursor-pointer">
            简体中文
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
