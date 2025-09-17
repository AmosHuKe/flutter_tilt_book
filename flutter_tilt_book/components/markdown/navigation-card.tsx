import { PropsWithChildren, ReactNode } from "react"
import Image from "next/image"
import { iconMap } from "@/settings/icons"
import clsx from "clsx"
import { Link } from "lib/transition"

type NavCardProps = PropsWithChildren & {
  subtitle?: string
  title: string
  description?: ReactNode
  href?: string
  image?: string
  className?: string
  external?: boolean
  icon?: keyof typeof iconMap
  variant?: "normal" | "small" | "image"
}

export function NavCard({
  subtitle,
  title,
  description,
  href,
  image,
  className,
  external = false,
  icon,
  variant = "normal",
  children,
}: NavCardProps) {
  const IconComponent = icon ? iconMap[icon] : null
  const ExternalIcon = iconMap["arrowUpRight"]

  const content = (
    <div
      className={clsx(
        "group relative flex overflow-hidden rounded-lg border bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 hover:dark:shadow-md",
        variant === "small"
          ? "items-center space-x-2 p-3"
          : variant === "image"
            ? "h-full flex-col justify-between p-0"
            : "h-full flex-col justify-between p-4",
        className
      )}
    >
      {external && href && variant !== "image" && (
        <div
          className={clsx(
            "absolute top-2 transform text-zinc-500 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white",
            variant === "small" ? "right-0" : "right-2"
          )}
        >
          <ExternalIcon className="h-4 w-4" />
        </div>
      )}
      {IconComponent && (
        <IconComponent className="text-zinc-500 dark:text-zinc-300" />
      )}
      <div>
        {subtitle && variant === "normal" && (
          <p className="!my-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
        {image && variant === "image" && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="!m-0 h-[180px] w-full !rounded-none border-0 object-cover object-center"
          />
        )}
        <div
          className={clsx(
            "font-semibold transition-all duration-300",
            variant === "small"
              ? "text-sm"
              : variant === "image"
                ? "p-4 text-sm"
                : "text-lg",
            className
          )}
        >
          {title}
        </div>
        {description && variant === "normal" && (
          <div className="!my-2 text-sm font-normal text-zinc-600 dark:text-zinc-400">
            {description}
          </div>
        )}
      </div>
      {children}
    </div>
  )

  return href ? (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="!no-underline"
    >
      {content}
    </Link>
  ) : (
    content
  )
}

export function NavCardGrid({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
      {children}
    </div>
  )
}
