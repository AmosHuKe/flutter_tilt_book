import { Settings as websiteSettings } from "@/settings/settings"

import { OpenGraph, TwitterCard } from "@/lib/metadata"

export const Package = {
  name: websiteSettings.packageName,
  link: websiteSettings.packageLink,
  version: websiteSettings.packageVersion,
}

export const Settings = {
  gaId: websiteSettings.gaId,
  gaConnected: websiteSettings.gaConnected,
  rightbar: websiteSettings.rightSidebar,
  toc: websiteSettings.tableOfContent,
  feedback: websiteSettings.feedbackEdit,
  totop: websiteSettings.toTopScroll,
  gitload: websiteSettings.loadFromGithub,

  title: websiteSettings.sitename,
  basePath: websiteSettings.basePath,
  metadataBase: `${websiteSettings.url}${websiteSettings.basePath}`,
  packageVersion: websiteSettings.packageVersion,
  description: websiteSettings.description,
  keywords: websiteSettings.keywords,
  icons: websiteSettings.favicon,
  currentRepoLink: websiteSettings.currentRepoLink,
  openGraph: {
    type: "website",
    title: websiteSettings.sitename,
    description: websiteSettings.description,
    siteName: websiteSettings.sitename,
    images: [
      {
        url: websiteSettings.urlImage,
        width: 640,
        height: 320,
        alt: websiteSettings.imageAlt,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: "summary_large_image",
    title: websiteSettings.sitename,
    description: websiteSettings.description,
    site: websiteSettings.twitterHandle,
    images: [
      {
        url: websiteSettings.urlImage,
        alt: websiteSettings.imageAlt,
      },
    ],
  } as TwitterCard,
  canonical: websiteSettings.url,
}
