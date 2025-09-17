import { Fragment } from "react"
import { Link } from "lib/transition"
import { LuHouse } from "react-icons/lu"

import { getDocument } from "@/lib/markdown"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function PageBreadcrumb({
  locale,
  paths,
}: {
  locale: string
  paths: string[]
}) {
  return (
    <div className="pb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <LuHouse className="h-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {paths.length > 2 ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {paths.slice(0, 1).map(async () => {
                  const slug = paths[0]
                  const href = `/${locale}/docs/${slug}`
                  const document = await getDocument(locale, slug)
                  if (!document) return null
                  const title = document.frontmatter.title

                  return (
                    <BreadcrumbLink key={slug} asChild>
                      <Link href={href}>{title}</Link>
                    </BreadcrumbLink>
                  )
                })}
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis className="h-1" />
              </BreadcrumbItem>

              {paths.slice(-1).map(async (path, i) => {
                const index = paths.length - 1 + i
                const slug = paths.slice(0, index + 1).join("/")
                const href = `/${locale}/docs/${slug}`
                const document = await getDocument(locale, slug)
                if (!document) return null
                const title = document.frontmatter.title

                return (
                  <Fragment key={path}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index < paths.length - 1 ? (
                        <BreadcrumbLink asChild>
                          <Link href={href}>{title}</Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="b">{title}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                )
              })}
            </>
          ) : (
            paths.map(async (path, index) => {
              const slug = paths.slice(0, index + 1).join("/")
              const href = `/${locale}/docs/${slug}`
              const document = await getDocument(locale, slug)
              if (!document) return null
              const title = document.frontmatter.title

              return (
                <Fragment key={path}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index < paths.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link href={href}>{title}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="b">{title}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              )
            })
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

// function toTitleCase(input: string): string {
//   const words = input.split("-")
//   const capitalizedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   )
//   return capitalizedWords.join(" ")
// }
