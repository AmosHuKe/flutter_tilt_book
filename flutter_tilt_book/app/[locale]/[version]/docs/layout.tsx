import { notFound } from "next/navigation"
import { VersionSettings } from "@/settings/version"
import { hasLocale } from "next-intl"

import { routing } from "@/i18n/routing"
import { Sidebar } from "@/components/navigation/sidebar"

type PageProps = {
  children: React.ReactNode
  params: Promise<{ locale: string; version: string }>
}

export default async function Documents({
  children,
  params,
}: Readonly<PageProps>) {
  const { locale, version } = await params

  if (
    !hasLocale(routing.locales, locale) ||
    !VersionSettings.versions.includes(version)
  ) {
    notFound()
  }

  return (
    <div className="flex items-start gap-14">
      <Sidebar locale={locale} version={version} />
      <div className="flex-1 lg:flex-6">{children}</div>{" "}
    </div>
  )
}
