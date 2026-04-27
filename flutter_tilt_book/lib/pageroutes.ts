import { Documents } from "@/settings/documents/documents"
import { getTranslations } from "next-intl/server"

export type Paths =
  | {
      title: string
      href: string
      noLink?: true
      isSubOpen?: boolean
      heading?: string
      items?: Paths[]
    }
  | {
      spacer: true
    }

export function Routes(locale: string, version: string): Paths[] {
  return [...Documents[version][locale]]
}

type Page = { title: string; href: string }

function isRoute(
  node: Paths
): node is Extract<Paths, { title: string; href: string }> {
  return "title" in node && "href" in node
}

function getAllLinks(node: Paths): Page[] {
  const pages: Page[] = []

  if (isRoute(node) && !node.noLink) {
    pages.push({ title: node.title, href: node.href })
  }

  if (isRoute(node) && node.items) {
    node.items.forEach((subNode) => {
      if (isRoute(subNode)) {
        const temp = { ...subNode, href: `${node.href}${subNode.href}` }
        pages.push(...getAllLinks(temp))
      }
    })
  }

  return pages
}

export function translateRoutes(locale: string, items: Paths[]): Paths[] {
  return items.map((item) => {
    const newItem = { ...item }
    if ("title" in newItem) {
      newItem.title = newItem.title
    }
    if ("heading" in newItem && newItem.heading) {
      newItem.heading = newItem.heading
    }
    if ("items" in newItem && Array.isArray(newItem.items)) {
      newItem.items = translateRoutes(locale, newItem.items)
    }
    return newItem
  })
}

export function PageRoutes(locale: string, version: string): Page[] {
  return Routes(locale, version)
    .map((it) => getAllLinks(it))
    .flat()
}
