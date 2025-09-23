import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"
import { getTranslations } from "next-intl/server"

import { getDocument } from "@/lib/markdown"
import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"
import { routing } from "@/i18n/routing"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/ui/typography"
import { BackToTop } from "@/components/navigation/backtotop"
import Feedback from "@/components/navigation/feedback"
import PageBreadcrumb from "@/components/navigation/pagebreadcrumb"
import Pagination from "@/components/navigation/pagination"
import Toc from "@/components/navigation/toc"

type PageProps = {
  params: Promise<{ locale: string; slug: string[] }>
}

export default async function Pages({ params }: PageProps) {
  const { locale, slug = [] } = await params
  const pathName = slug.join("/")
  const res = await getDocument(locale, pathName)

  if (!res || !hasLocale(routing.locales, locale)) notFound()

  const t = await getTranslations({ locale })

  const { frontmatter, content, tocs } = res

  return (
    <div className="flex items-start gap-14">
      <section className="flex-[3] pt-10">
        <PageBreadcrumb locale={locale} paths={slug} />

        <Typography>
          <h1 className="!mb-2 text-3xl !font-semibold">{frontmatter.title}</h1>
          <p className="-mt-4 text-sm">{frontmatter.description}</p>
          <Separator className="my-6" />
          <section>{content}</section>
          <Pagination locale={locale} pathname={pathName} />
        </Typography>
      </section>

      {Settings.rightbar && (
        <aside
          className="toc sticky top-16 hidden h-[94.5vh] min-w-[230px] gap-3 py-8 xl:flex xl:flex-col"
          aria-label="Table of contents"
        >
          {Settings.toc && <Toc title={t("toc.title")} tocs={tocs} />}
          {Settings.feedback && (
            <Feedback
              locale={locale}
              slug={pathName}
              title={frontmatter.title}
            />
          )}
          {Settings.totop && (
            <BackToTop className="mt-6 self-start text-sm text-zinc-800 dark:text-zinc-300/85" />
          )}
        </aside>
      )}
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug = [] } = await params
  const pathName = slug.join("/")
  const res = await getDocument(locale, pathName)

  if (!res) return null

  const { frontmatter, lastUpdated } = res

  return {
    title: `${frontmatter.title} - ${Settings.title}`,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    ...(lastUpdated && {
      lastModified: new Date(lastUpdated).toISOString(),
    }),
  }
}

export async function generateStaticParams() {
  return PageRoutes.filter((item) => item.href).map((item) => ({
    slug: item.href.split("/").slice(1),
  }))
}
