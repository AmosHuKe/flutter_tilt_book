import { Documents } from "@/settings/documents"
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

export const Routes: Paths[] = [...Documents]

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

export async function translateRoutes(
  locale: string,
  items: Paths[]
): Promise<Paths[]> {
  return Promise.all(
    items.map(async (item) => {
      const t = await getTranslations({ locale, namespace: "docs" })
      const newItem = { ...item }
      if ("title" in newItem) {
        newItem.title = t(newItem.title)
      }
      if ("heading" in newItem && newItem.heading) {
        newItem.heading = t(newItem.heading)
      }
      if ("items" in newItem && Array.isArray(newItem.items)) {
        newItem.items = await translateRoutes(locale, newItem.items)
      }
      return newItem
    })
  )
}

export const PageRoutes = Routes.map((it) => getAllLinks(it)).flat()
