import { LuAlignLeft } from "react-icons/lu"

import { Settings } from "@/lib/meta"
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/navigation/logo"
import { NavMenu } from "@/components/navigation/navbar"
import PageMenu from "@/components/navigation/pagemenu"

export function Sidebar({ locale }: { locale: string }) {
  return (
    <aside
      className="sticky top-16 hidden h-[94.5vh] min-w-[280px] flex-[1] flex-col overflow-y-auto lg:flex"
      aria-label="Page navigation"
    >
      <ScrollArea type="hover" className="h-full pr-4 pb-4">
        <PageMenu locale={locale} />
      </ScrollArea>
    </aside>
  )
}

export function SheetLeft({ locale }: { locale: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex cursor-pointer lg:hidden"
        >
          <LuAlignLeft className="!size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col gap-0 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose asChild>
            <div className="flex items-center gap-1">
              <Logo locale={locale} />
              <span className="text-sm">{Settings.packageVersion}</span>
            </div>
          </SheetClose>
        </SheetHeader>
        <ScrollArea
          type="always"
          className="flex h-full flex-col gap-4 overflow-y-auto"
        >
          <div className="mx-0 mt-3 flex flex-col gap-2.5 pr-5 pl-2.5">
            <NavMenu locale={locale} isSheet />
          </div>
          <div className="mx-0 pr-5 pl-2.5">
            <PageMenu locale={locale} isSheet />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
