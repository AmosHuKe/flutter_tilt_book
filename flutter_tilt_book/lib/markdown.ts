import { createReadStream, promises as fs } from "fs"
import path from "path"

import { GitHubLink } from "@/settings/navigation"
import { Element, Text } from "hast"
import { compileMDX } from "next-mdx-remote/rsc"
import { refractor } from "refractor"
import dartSyntax from "refractor/dart"
import jsxSyntax from "refractor/jsx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeCodeTitles from "rehype-code-titles"
import rehypeKatex from "rehype-katex"
import rehypePrismGenerator from "rehype-prism-plus/generator"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { Node } from "unist"
import { visit } from "unist-util-visit"

import { components } from "@/lib/components"
import { Settings } from "@/lib/meta"
import { PageRoutes } from "@/lib/pageroutes"

declare module "hast" {
  interface Element {
    raw?: string
  }
}

type BaseMdxFrontmatter = {
  title: string
  description: string
  keywords: string
}

async function parseMdx<Frontmatter>(rawMdx: string) {
  refractor.register(dartSyntax)
  refractor.register(jsxSyntax)
  const customRehypePrism = rehypePrismGenerator(refractor)

  return await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preCopy,
          rehypeCodeTitles,
          rehypeKatex,
          customRehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postCopy,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  })
}

const documentPath = (locale: string, slug: string) => {
  return Settings.gitload
    ? `${GitHubLink.href}/raw/main/contents/${locale}/docs/${slug}/index.mdx`
    : path.join(process.cwd(), `contents/${locale}/docs`, `${slug}/index.mdx`)
}

const getDocumentPath = (() => {
  const cache = new Map<string, string>()
  return (locale: string, slug: string) => {
    const localeSlug = `${locale}/docs/${slug}`
    if (!cache.has(localeSlug)) {
      cache.set(localeSlug, documentPath(locale, slug))
    }
    return cache.get(localeSlug)!
  }
})()

export async function getDocument(locale: string, slug: string) {
  try {
    const contentPath = getDocumentPath(locale, slug)
    let rawMdx = ""
    let lastUpdated: string | null = null

    if (Settings.gitload) {
      const response = await fetch(contentPath)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch content from GitHub: ${response.statusText}`
        )
      }
      rawMdx = await response.text()
      lastUpdated = response.headers.get("Last-Modified") ?? null
    } else {
      rawMdx = await fs.readFile(contentPath, "utf-8")
      const stats = await fs.stat(contentPath)
      lastUpdated = stats.mtime.toISOString()
    }

    const parsedMdx = await parseMdx<BaseMdxFrontmatter>(rawMdx)
    const tocs = await getHeadings(locale, slug)

    return {
      frontmatter: parsedMdx.frontmatter,
      content: parsedMdx.content,
      tocs,
      lastUpdated,
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

const headingsRegex = /^(#{2,4})\s(.+)$/gm

// TODO: 解析后再处理 <h1> <h2> 等等
export async function getHeadings(
  locale: string,
  slug: string
): Promise<Array<{ level: number; text: React.ReactElement; href: string }>> {
  const extractedHeadings: Array<{
    level: number
    text: React.ReactElement
    href: string
  }> = []
  let rawMdx = ""

  if (Settings.gitload) {
    const contentPath = `${GitHubLink.href}/raw/main/contents/${locale}/docs/${slug}/index.mdx`
    try {
      const response = await fetch(contentPath)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch content from GitHub: ${response.statusText}`
        )
      }
      rawMdx = await response.text()
    } catch (error) {
      console.error("Error fetching content from GitHub:", error)
      return []
    }
  } else {
    const contentPath = path.join(
      process.cwd(),
      `contents/${locale}/docs`,
      `${slug}/index.mdx`
    )
    try {
      const stream = createReadStream(contentPath, { encoding: "utf-8" })
      for await (const chunk of stream) {
        rawMdx += chunk
      }
    } catch (error) {
      console.error("Error reading local file:", error)
      return []
    }
  }

  let match
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const parseMdxText = (await parseMdx(text)).content
    extractedHeadings.push({
      level: level,
      text: parseMdxText,
      href: `#${innerslug(text)}`,
    })
  }

  return extractedHeadings
}

function innerslug(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5\-_]/g, "")
}

const pathIndexMap = new Map(
  PageRoutes.map((route, index) => [route.href, index])
)

export function getPreviousNext(path: string) {
  const index = pathIndexMap.get(`/${path}`)

  if (index === undefined || index === -1) {
    return { prev: null, next: null }
  }

  const prev = index > 0 ? PageRoutes[index - 1] : null
  const next = index < PageRoutes.length - 1 ? PageRoutes[index + 1] : null

  return { prev, next }
}

const preCopy = () => (tree: Node) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName === "pre") {
      const [codeEl] = node.children as Element[]
      if (codeEl?.tagName === "code") {
        const textNode = codeEl.children?.[0] as Text
        node.raw = textNode?.value || ""
      }
    }
  })
}

const postCopy = () => (tree: Node) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName === "pre" && node.raw) {
      node.properties = node.properties || {}
      node.properties["raw"] = node.raw
    }
  })
}
