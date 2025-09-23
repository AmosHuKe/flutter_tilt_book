import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { LuArrowUpRight } from "react-icons/lu"

import { Settings } from "@/lib/meta"
import { cn } from "@/lib/utils"

type SideBarEdit = {
  locale: string
  title: string
  slug: string
}

export default async function RightSideBar({
  locale,
  slug,
  title,
}: SideBarEdit) {
  const t = await getTranslations({ locale })
  const feedbackUrl = `${Settings.currentRepoLink}/issues/new?title=Feedback for "${title}" - "${locale}/docs/${slug}"`
  const editUrl = `${Settings.currentRepoLink}/tree/main/flutter_tilt_book/contents/${locale}/docs/${slug}/index.mdx`

  return (
    <div className="flex flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">{t("feedback.title")}</h3>
      <div className="flex flex-col gap-2">
        <Link
          href={feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center text-sm text-zinc-800 no-underline dark:text-zinc-300/85"
          )}
        >
          <LuArrowUpRight className="mr-1 inline-block h-4 w-4" />{" "}
          {t("feedback.feedback")}
        </Link>
        <Link
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center text-sm text-zinc-800 no-underline dark:text-zinc-300/85"
          )}
        >
          <LuArrowUpRight className="mr-1 inline-block h-4 w-4" />{" "}
          {t("feedback.edit-page")}
        </Link>
      </div>
    </div>
  )
}
