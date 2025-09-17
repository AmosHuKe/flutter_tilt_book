import { nextConfig } from "@/next.config.mjs"

export const Settings = {
  basePath: nextConfig.basePath,
  url: "https://amoshuke.github.io",
  favicon: "/favicon.ico",

  gaId: "G-M78WWHWYGR",
  gaConnected: true,

  sitename: "Flutter Tilt",
  description: "Flutter Tilt - Examples of the flutter_tilt package.",
  keywords: [
    "flutter tilt",
    "flutter",
    "package",
    "documentation",
    "open source",
  ],
  urlImage: "/images/og-image.png",
  imageAlt: "Flutter Tilt Documentation",

  packageName: "Flutter Tilt",
  packageVersion: "v3.3.1",
  packageLink: "https://pub.dev/packages/flutter_tilt",

  twitterHandle: "https://pub.dev/packages/flutter_tilt",
  currentRepoLink: "https://github.com/amoshuke/flutter_tilt_book",

  branding: true,
  rightSidebar: true,
  feedbackEdit: true,
  tableOfContent: true,
  toTopScroll: true,

  loadFromGithub: false,
}
