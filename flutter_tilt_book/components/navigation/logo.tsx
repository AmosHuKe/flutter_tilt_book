import { Link } from "lib/transition"

import { Package } from "@/lib/meta"

export function Logo({ locale }: { locale: string }) {
  return (
    <Link href={`/${locale}/`} className="flex items-center gap-2.5">
      <span className="text-md font-semibold">{Package.name}</span>
    </Link>
  )
}
