import { Package, Settings } from "@/lib/meta"

import { VersionSwitcher } from "./version-switcher"

export function Logo({ locale, version }: { locale: string; version: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <VersionSwitcher
        basePath={Settings.basePath}
        locale={locale}
        version={version}
        packageName={Package.name}
      />
    </div>
  )
}
