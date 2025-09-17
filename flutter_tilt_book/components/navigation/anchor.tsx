"use client"

import { ComponentProps } from "react"
import { usePathname } from "next/navigation"
import { Link } from "lib/transition"

import { cn } from "@/lib/utils"

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean
  activeClassName?: string
  disabled?: boolean
}

export const AnchorNavStyle = cn(
  "text-sm w-fit rounded-md px-2.5 py-1",
  "data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground outline-none [&_svg:not([class*='size-'])]:size-4 dark:hover:bg-accent/60",
  "transition-all duration-300"
)
export const AnchorNavActiveStyle = cn(
  "flex items-center gap-1 bg-accent text-accent-foreground dark:bg-accent/60 transition-all duration-300"
)

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname()
  let isMatch = absolute
    ? props.href.toString().split("/")[0] == path.split("/")[0]
    : path.includes(props.href.toString())

  if (props.href.toString().includes("http")) isMatch = false

  if (disabled) {
    return <div className={cn(className, "cursor-not-allowed")}>{children}</div>
  }

  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  )
}
