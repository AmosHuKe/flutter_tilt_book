import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
