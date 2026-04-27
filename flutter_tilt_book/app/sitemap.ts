import type { MetadataRoute } from "next"
import { VersionSettings } from "@/settings/version"

import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"
import { routing } from "@/i18n/routing"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return VersionSettings.versions.flatMap((version) => {
    return PageRoutes(routing.defaultLocale, version).map((page) => {
      const url = (locale: string, version: string) =>
        `${Settings.metadataBase}/${locale}/${version}/docs${page.href}`
      return {
        url: url(routing.defaultLocale, version),
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((locale) => [locale, url(locale, version)])
          ),
        },
      }
    })
  })
}
