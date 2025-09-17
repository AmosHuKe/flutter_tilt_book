import type { MetadataRoute } from "next"

import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"
import { routing } from "@/i18n/routing"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return PageRoutes.map((page) => {
    const url = (locale: string) =>
      `${Settings.metadataBase}/${locale}/docs${page.href}`
    return {
      url: url(routing.defaultLocale),
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [locale, url(locale)])
        ),
      },
    }
  })
}
