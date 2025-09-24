import searchJsonEn from "@/public/search-data/en/documents.json"
import searchJsonZh from "@/public/search-data/zh/documents.json"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Paths } from "@/lib/pageroutes"

interface SearchMeta {
  cleanContent: string
  headings: string[]
  keywords: string[]
}

interface SearchDocument {
  slug: string
  title: string
  content: string
  description: string
  _searchMeta: SearchMeta
}

export type search = {
  title: string
  href: string
  snippet?: string
  description?: string
  relevance?: number
}

const searchData = (locale: string) => {
  switch (locale) {
    case "zh":
      return searchJsonZh as SearchDocument[]
    case "en":
    default:
      return searchJsonEn as SearchDocument[]
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      const cachedResult = cache.get(key)
      if (cachedResult !== undefined) {
        return cachedResult
      }
    }

    const result = fn(...args)

    if (result !== "" && result != null) {
      cache.set(key, result)
    }

    return result
  }) as T
}

const memoizedSearchMatch = memoize(searchMatch)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function isRoute(
  node: Paths
): node is Extract<Paths, { href: string; title: string }> {
  return "href" in node && "title" in node
}

export function helperSearch(
  query: string,
  node: Paths,
  prefix: string,
  currentLevel: number,
  maxLevel?: number
) {
  const res: Paths[] = []
  let parentHas = false
  const lowerQuery = query.toLowerCase()

  if (isRoute(node)) {
    const nextLink = `${prefix}${node.href}`

    const titleMatch = node.title.toLowerCase().includes(lowerQuery)
    const titleDistance = memoizedSearchMatch(
      lowerQuery,
      node.title.toLowerCase()
    )

    if (titleMatch || titleDistance <= 2) {
      res.push({ ...node, items: undefined, href: nextLink })
      parentHas = true
    }

    const goNext = maxLevel ? currentLevel < maxLevel : true

    if (goNext && node.items) {
      node.items.forEach((item) => {
        const innerRes = helperSearch(
          query,
          item,
          nextLink,
          currentLevel + 1,
          maxLevel
        )
        if (innerRes.length && !parentHas && !node.noLink) {
          res.push({ ...node, items: undefined, href: nextLink })
          parentHas = true
        }
        res.push(...innerRes)
      })
    }
  }

  return res
}

function splitQuery(query: string): string[] {
  // 英文按单词，中文按单字
  return query
    .trim()
    .replace(/([\u4e00-\u9fa5])/g, " $1 ") // 汉字前后加空格
    .split(/\s+/)
    .filter((w) => w.length > 0)
}

function searchMatch(a: string, b: string): number {
  if (typeof a !== "string" || typeof b !== "string") return 0

  const aLen = a.length
  const bLen = b.length

  if (aLen === 0) return bLen
  if (bLen === 0) return aLen

  if (aLen > bLen) [a, b] = [b, a]

  const maxDistance = Math.min(Math.max(Math.floor(aLen / 2), 2), 5)

  let prevRow = Array(aLen + 1).fill(0)
  let currRow = Array(aLen + 1).fill(0)

  for (let i = 0; i <= aLen; i++) prevRow[i] = i

  for (let j = 1; j <= bLen; j++) {
    currRow[0] = j
    for (let i = 1; i <= aLen; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      currRow[i] = Math.min(
        prevRow[i] + 1,
        currRow[i - 1] + 1,
        prevRow[i - 1] + cost
      )

      if (currRow[i] > maxDistance) {
        return maxDistance
      }
    }
    ;[prevRow, currRow] = [currRow, prevRow]
  }

  return Math.min(prevRow[aLen], maxDistance)
}

function calculateRelevance(
  query: string,
  title: string,
  content: string,
  headings: string[],
  keywords: string[]
): number {
  const lowerQuery = query.toLowerCase().trim()
  const lowerTitle = title.toLowerCase()
  const queryWords = lowerQuery.split(/\s+/)

  let score = 0

  if (lowerTitle === lowerQuery) {
    score += 50
  } else if (lowerTitle.includes(lowerQuery)) {
    score += 30
  }

  queryWords.forEach((word) => {
    if (lowerTitle.includes(word)) {
      score += 15
    }
  })

  const lowerHeadings = headings.map((h) => h.toLowerCase())
  if (lowerHeadings.some((h) => h === lowerQuery)) {
    score += 40
  }
  lowerHeadings.forEach((heading) => {
    if (heading.includes(lowerQuery)) {
      score += 25
    }
  })

  const lowerKeywords = keywords.map((k) => k.toLowerCase())
  if (lowerKeywords.some((k) => k === lowerQuery)) {
    score += 35
  }
  lowerKeywords.forEach((keyword) => {
    if (keyword.includes(lowerQuery)) {
      score += 20
    }
  })

  const exactMatches = content
    .toLowerCase()
    .match(new RegExp(`\\b${lowerQuery}\\b`, "gi"))
  if (exactMatches) {
    score += exactMatches.length * 10
  }

  queryWords.forEach((word) => {
    if (content.toLowerCase().includes(word)) {
      score += 5
    }
  })

  const proximityScore = calculateProximityScore(
    lowerQuery,
    content.toLowerCase()
  )
  score += proximityScore * 2

  return score / Math.log(content.length + 1)
}

function calculateProximityScore(query: string, content: string): number {
  if (typeof query !== "string" || typeof content !== "string") return 0

  const words = content.split(/\s+/)
  const queryWords = query.split(/\s+/)

  let proximityScore = 0
  let firstIndex = -1

  queryWords.forEach((queryWord, queryIndex) => {
    const wordIndex = words.indexOf(queryWord, firstIndex + 1)

    if (wordIndex !== -1) {
      if (queryIndex === 0) {
        proximityScore += 30
      } else if (wordIndex - firstIndex <= 3) {
        proximityScore += 20 - (wordIndex - firstIndex)
      }

      firstIndex = wordIndex
    } else {
      firstIndex = -1
    }
  })

  return proximityScore
}

function extractSnippet(content: string, query: string): string {
  const indices: number[] = []
  const words = splitQuery(query)

  words.forEach((word) => {
    const index = content.indexOf(word)
    if (index !== -1) {
      indices.push(index)
    }
  })

  if (indices.length === 0) {
    return content.slice(0, 100)
  }

  const avgIndex = Math.floor(indices.reduce((a, b) => a + b) / indices.length)
  const snippetLength = 160
  const contextLength = Math.floor(snippetLength / 2)
  const start = Math.max(0, avgIndex - contextLength)
  const end = Math.min(avgIndex + contextLength, content.length)

  let snippet = content.slice(start, end)
  if (start > 0) snippet = `...${snippet}`
  if (end < content.length) snippet += "..."

  return snippet
}

export function advanceSearch(locale: string, query: string) {
  const lowerQuery = query.toLowerCase().trim()
  const queryWords = lowerQuery.split(/\s+/).filter((word) => word.length >= 2)

  if (queryWords.length === 0) return []

  const chunks = chunkArray(searchData(locale), 100)

  const results = chunks.flatMap((chunk) =>
    chunk
      .map((doc) => {
        const relevanceScore = calculateRelevance(
          queryWords.join(" "),
          doc.title,
          doc._searchMeta.cleanContent,
          doc._searchMeta.headings,
          doc._searchMeta.keywords
        )

        const snippet = extractSnippet(doc._searchMeta.cleanContent, lowerQuery)
        const highlightedSnippet = highlight(snippet, queryWords.join(" "))

        return {
          title: doc.title,
          href: doc.slug,
          snippet: highlightedSnippet,
          description: doc.description || "",
          relevance: relevanceScore,
        }
      })
      .filter((doc) => doc.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
  )

  return results.slice(0, 10)
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

function formatDateHelper(
  dateStr: string,
  options: Intl.DateTimeFormatOptions
): string {
  const [day, month, year] = dateStr.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString("en-US", options)
}

export function formatDate(dateStr: string): string {
  return formatDateHelper(dateStr, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatDate2(dateStr: string): string {
  return formatDateHelper(dateStr, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function stringToDate(date: string) {
  const [day, month, year] = date.split("-").map(Number)
  return new Date(year, month - 1, day)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  let rafId: number | null = null
  let lastCallTime: number | null = null

  const later = (time: number) => {
    const remaining = wait - (time - (lastCallTime || 0))
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      func(...(lastArgs as Parameters<T>))
      lastArgs = null
      lastCallTime = null
    } else {
      rafId = requestAnimationFrame(later)
    }
  }

  return (...args: Parameters<T>) => {
    lastArgs = args
    lastCallTime = performance.now()
    const callNow = immediate && !timeout
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      rafId = requestAnimationFrame(later)
    }, wait)
    if (callNow) func(...args)
  }
}

export function highlight(snippet: string, searchTerms: string): string {
  if (!snippet || !searchTerms) return snippet

  const terms = splitQuery(searchTerms)
    .filter((term) => term.trim().length > 0)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  if (terms.length === 0) return snippet

  const regex = new RegExp(`(${terms.join("|")})`, "gi")
  return snippet.replace(regex, "<span class='highlight'>$1</span>")
}
