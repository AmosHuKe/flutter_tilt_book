import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { GoogleAnalytics } from "@next/third-parties/google"
import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { Settings } from "@/lib/meta"
import { routing } from "@/i18n/routing"
import { Footer } from "@/components/navigation/footer"
import { Navbar } from "@/components/navigation/navbar"
import { Providers } from "@/components/providers"

import "@/styles/globals.css"
import "@/styles/prism/prism-light.css"
import "@/styles/prism/prism-dark.css"

type PageProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const baseUrl = Settings.metadataBase

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  icons: `${Settings.basePath}${Settings.icons}`,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  alternates: {
    canonical: baseUrl,
  },
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<PageProps>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      {Settings.gaConnected && <GoogleAnalytics gaId={Settings.gaId} />}
      <body className={`${inter.variable} font-regular`}>
        <Providers>
          <Navbar locale={locale} />
          <main className="h-auto px-5 sm:pr-8 sm:pl-5">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
