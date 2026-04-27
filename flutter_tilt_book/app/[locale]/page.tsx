import { redirect } from "next/navigation"
import { VersionSettings } from "@/settings/version"

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function LocalePage({ params }: Readonly<PageProps>) {
  const { locale } = await params

  redirect(`/${locale}/${VersionSettings.latestVersion}`)
}
