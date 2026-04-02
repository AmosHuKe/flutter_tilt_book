import createNextIntlPlugin from "next-intl/plugin"

import { Settings } from "./settings/settings.ts"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
export const nextConfig = {
  basePath: Settings.basePath,
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default withNextIntl(nextConfig)
