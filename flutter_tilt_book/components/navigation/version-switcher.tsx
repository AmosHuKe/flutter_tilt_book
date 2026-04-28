"use client"

import { VersionSettings } from "@/settings/version"
import { LuChevronsUpDown } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function VersionSwitcher({
  basePath,
  locale,
  version,
  packageName,
}: {
  basePath?: string
  locale: string
  version: string
  packageName: string
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="default"
          className="cursor-pointer"
          aria-label="Switch Version"
        >
          <span className="text-md font-semibold">{packageName}</span>
          <span className="text-md">{version}</span>
          <LuChevronsUpDown className="h-[1.1rem] w-[1.1rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {VersionSettings.versions.map((version) => (
          <a key={version} href={`${basePath}/${locale}/${version}`}>
            <DropdownMenuItem className="cursor-pointer">
              {version}
            </DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
