import { Link } from "lib/transition"
import { getTranslations } from "next-intl/server"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

import { getPreviousNext } from "@/lib/markdown"
import { cn } from "@/lib/utils"

export default async function Pagination({
  locale,
  pathname,
  className,
}: {
  locale: string
  pathname: string
  className?: string
}) {
  const res = getPreviousNext(pathname)
  const t = await getTranslations({ locale, namespace: "docs" })

  return (
    <div
      className={cn(
        "flex items-center justify-between py-5 sm:py-7",
        className
      )}
    >
      <div>
        {res.prev && (
          <Link
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring ml-auto inline-flex h-9 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap !no-underline shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href={`/${locale}/docs${res.prev.href}`}
          >
            <LuChevronLeft className="mr-1 h-[1rem] w-[1rem]" />
            <p className="max-w-[20vw] overflow-hidden overflow-ellipsis sm:max-w-[20vw]">
              {t(res.prev.title)}
            </p>
          </Link>
        )}
      </div>
      <div>
        {res.next && (
          <Link
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring ml-auto inline-flex h-9 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap !no-underline shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href={`/${locale}/docs${res.next.href}`}
          >
            <p className="max-w-[20vw] overflow-hidden overflow-ellipsis sm:max-w-[20vw]">
              {t(res.next.title)}
            </p>
            <LuChevronRight className="ml-1 h-[1rem] w-[1rem]" />
          </Link>
        )}
      </div>
    </div>
  )
}
