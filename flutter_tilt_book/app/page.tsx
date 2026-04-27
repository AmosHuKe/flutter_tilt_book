import { redirect } from "next/navigation"
import { VersionSettings } from "@/settings/version"

import { routing } from "@/i18n/routing"

export default function RootPage() {
  redirect(`/${routing.defaultLocale}/${VersionSettings.latestVersion}`)
}
