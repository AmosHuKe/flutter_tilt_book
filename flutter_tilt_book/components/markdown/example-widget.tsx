"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import clsx from "clsx"

import { Badge } from "@/components/ui/badge"
import Loading from "@/components/ui/loading"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ExampleWidgetProps {
  name: string
  height: number
  query?: Record<string, string>
}

function Component({ name, height }: ExampleWidgetProps) {
  const flutterTiltExampleUrl = `${process.env["NEXT_PUBLIC_FLUTTER_TILT_EXAMPLE_URL"]}/flutter_tilt_example/index.html#/embed/${name}?showCode=false&showBorderRadius=false`

  const [resources, setResources] = useState<string>()
  const [isObserving, setIsObserving] = useState(false)
  const [, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const observerRef = useRef<PerformanceObserver | null>(null)

  // 停止监控 iframe
  const stopObserving = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
    setResources(undefined)
    setIsObserving(false)
  }, [])

  // 开始监控 iframe 同域资源加载
  const startObserving = useCallback(() => {
    if (!iframeRef.current) return

    try {
      const iframeWindow = iframeRef.current.contentWindow

      if (!iframeWindow) {
        setIsObserving(false)
        setError(null)
        return
      }

      if (!observerRef.current) {
        if (!("PerformanceObserver" in iframeWindow)) {
          const error = "当前环境不支持 PerformanceObserver"
          console.error(error)
          setError(error)
          setIsObserving(false)
          return
        }
        console.info("开始监控 iframe 资源加载")
        observerRef.current = new iframeWindow.PerformanceObserver(
          (list: { getEntries: () => { name: string }[] }) => {
            const entries = list.getEntries()
            if (entries.length > 0) {
              const fullName = entries[entries.length - 1].name
              const lastPart = fullName.substring(fullName.lastIndexOf("/") + 1)
              setResources(lastPart)
            }
          }
        )

        if (observerRef.current) {
          setIsObserving(true)
          setError(null)
          observerRef.current.observe({ entryTypes: ["resource"] })
          iframeRef.current.onload = () => {
            setTimeout(() => {
              stopObserving()
            }, 1000)
          }
        }
      }
    } catch (e) {
      const error = `监控 iframe 资源失败：${e}`
      console.error(error)
      setError(error)
      setIsObserving(false)
    }
  }, [stopObserving, setError])

  useEffect(() => {
    requestAnimationFrame(() => startObserving())
    return () => {
      stopObserving()
    }
  }, [startObserving, stopObserving])

  return (
    <div className="relative">
      <Badge
        variant="secondary"
        className={clsx(
          "pointer-events-none absolute top-1.5 left-1.5 z-2 h-6 px-2 backdrop-blur-xl backdrop-filter transition-opacity duration-500",
          isObserving ? "opacity-100" : "opacity-0"
        )}
        style={{
          backdropFilter: "blur(16px) saturate(1.5)",
          WebkitBackdropFilter: "blur(16px) saturate(1.5)",
        }}
      >
        <Loading />
        <span
          className={clsx(
            "max-w-60 overflow-hidden text-right text-ellipsis whitespace-nowrap",
            "text-xs font-normal text-zinc-600 dark:text-zinc-300",
            !resources ? "hidden" : ""
          )}
        >
          {resources ? resources : ""}
        </span>
      </Badge>
      <iframe
        ref={iframeRef}
        className="w-full rounded-xl border dark:border-zinc-400/20"
        style={{ height: `${height}px` }}
        src={flutterTiltExampleUrl}
      />
    </div>
  )
}

export const ExampleWidget = dynamic(() => Promise.resolve(Component), {
  ssr: false,
})

export function ExampleCodeWidget({
  children,
  name,
  height,
  previewText = "Preview",
  codeText = "Code",
}: ExampleWidgetProps & {
  children: React.ReactNode
  previewText?: string
  codeText?: string
}) {
  const [tab, setTab] = useState("preview")

  return (
    <div className="rounded-xl border border-zinc-100 p-2.5 dark:border-zinc-900/90">
      <Tabs defaultValue={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="preview" className="cursor-pointer">
            {previewText}
          </TabsTrigger>
          <TabsTrigger value="code" className="cursor-pointer">
            {codeText}
          </TabsTrigger>
        </TabsList>
        <div style={{ minHeight: `${height}px` }}>
          <div hidden={tab !== "preview"}>
            <ExampleWidget name={name} height={height} />
          </div>
          <div hidden={tab !== "code"}>{children}</div>
        </div>
      </Tabs>
    </div>
  )
}
