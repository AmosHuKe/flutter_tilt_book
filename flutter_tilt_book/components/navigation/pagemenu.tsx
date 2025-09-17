import { Routes, translateRoutes } from "@/lib/pageroutes"
import SubLink from "@/components/navigation/sublink"

export default async function PageMenu({
  locale,
  isSheet = false,
}: {
  locale: string
  isSheet?: boolean
}) {
  const translatedRoutes = await translateRoutes(locale, Routes)

  return (
    <div className="mt-5 flex flex-col gap-1 pb-6">
      {translatedRoutes.map((item, index) => {
        if ("spacer" in item) {
          return (
            <div key={`spacer-${index}`} className="my-1 mr-3">
              <div className="h-[2px] rounded-xl bg-linear-to-r from-zinc-100 from-[60%] to-transparent to-[100%] dark:from-zinc-900" />
            </div>
          )
        }
        return (
          <div key={item.title + index}>
            {item.heading && (
              <div className="mt-1.5 mb-1 px-2.5 text-xs font-normal text-zinc-500 dark:text-zinc-500">
                {item.heading}
              </div>
            )}
            <SubLink
              locale={locale}
              pathProps={{
                ...item,
                href: `/${locale}/docs${item.href}`,
                level: 0,
                isSheet,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
