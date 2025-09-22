import Link from "next/link"
import { GitHubLink, Navigations, PubDevLink } from "@/settings/navigation"
import { getTranslations } from "next-intl/server"
import { LuArrowUpRight } from "react-icons/lu"
import { RiFlutterFill, RiGithubFill } from "react-icons/ri"

import { Settings } from "@/lib/meta"
import { Routes, translateRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import Anchor, {
  AnchorNavActiveStyle,
  AnchorNavStyle,
} from "@/components/navigation/anchor"
import { LanguageSwitcher } from "@/components/navigation/language-switcher"
import { Logo } from "@/components/navigation/logo"
import Search from "@/components/navigation/search"
import { SheetLeft } from "@/components/navigation/sidebar"
import { ThemeModeToggle } from "@/components/navigation/theme-toggle"

export async function Navbar({ locale }: { locale: string }) {
  const translatedRoutes = await translateRoutes(locale, Routes)

  return (
    <nav
      className="bg-opacity-5 sticky top-0 z-50 h-16 w-full border-b px-2 backdrop-blur-xl backdrop-filter md:px-4"
      style={{
        backdropFilter: "blur(16px) saturate(1.5)",
        WebkitBackdropFilter: "blur(16px) saturate(1.5)",
      }}
    >
      <div className="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeft locale={locale} />
          <div className="flex items-center gap-6">
            <div className="hidden gap-1 lg:flex lg:items-center">
              <Logo locale={locale} />
              <span className="text-sm">{Settings.packageVersion}</span>
            </div>
            <div className="text-muted-foreground hidden items-center gap-5 text-sm font-medium lg:flex">
              <NavMenu locale={locale} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 sm:ml-0">
            {GitHubLink.href && (
              <Link
                href={GitHubLink.href}
                className={buttonVariants({ variant: "outline", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the repository on GitHub"
              >
                <RiGithubFill className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            )}
            {PubDevLink.href && (
              <Link
                href={PubDevLink.href}
                className={buttonVariants({ variant: "outline", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the package on pub.dev"
              >
                <RiFlutterFill className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            )}
          </div>
          <Search locale={locale} documentRoutes={translatedRoutes} />
          <div className="flex gap-2 sm:ml-0">
            <LanguageSwitcher basePath={Settings.basePath} />
            <ThemeModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export async function NavMenu({
  locale,
  isSheet = false,
}: {
  locale: string
  isSheet?: boolean
}) {
  const t = await getTranslations({ locale })

  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            absolute
            className={AnchorNavStyle}
            activeClassName={AnchorNavActiveStyle}
            href={`/${locale}${item.href}`}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {t(item.title)}{" "}
            {item.external && (
              <LuArrowUpRight className="h-3 w-3 align-super" strokeWidth={3} />
            )}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
