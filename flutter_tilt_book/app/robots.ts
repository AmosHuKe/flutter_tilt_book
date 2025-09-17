import type { MetadataRoute } from "next"

import { Settings } from "@/lib/meta"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${Settings.metadataBase}/sitemap.xml`,
  }
}
