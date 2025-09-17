import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"

import { routing } from "@/i18n/routing"
import { Sidebar } from "@/components/navigation/sidebar"

type PageProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function Documents({
  children,
  params,
}: Readonly<PageProps>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <div className="flex items-start gap-14">
      <Sidebar locale={locale} />
      <div className="flex-1 lg:flex-[6]">{children}</div>{" "}
    </div>
  )
}
