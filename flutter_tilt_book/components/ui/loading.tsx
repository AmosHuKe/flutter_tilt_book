import { RiLoaderLine } from "react-icons/ri"

import { cn } from "@/lib/utils"

export default function Loading({ className }: React.ComponentProps<"div">) {
  return <RiLoaderLine className={cn("fas fa-sync animate-spin", className)} />
}
