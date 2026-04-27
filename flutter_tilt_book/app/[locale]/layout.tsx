import { routing } from "@/i18n/routing"

type PageProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children }: Readonly<PageProps>) {
  return children
}
