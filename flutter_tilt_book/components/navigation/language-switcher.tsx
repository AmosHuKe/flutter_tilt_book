"use client"

import { usePathname } from "next/navigation"
import { Link } from "lib/transition"
import { RiTranslate2 } from "react-icons/ri"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
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
        <DropdownMenuItem>
          <Link href={`/en${restPath}`}>English</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/zh${restPath}`}>简体中文</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
