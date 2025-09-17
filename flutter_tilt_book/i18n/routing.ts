import { I18nSettings } from "@/settings/i18n"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: I18nSettings.locales,
  defaultLocale: I18nSettings.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
})
