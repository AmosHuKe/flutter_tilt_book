import { Link } from "lib/transition"
import { getTranslations } from "next-intl/server"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Readonly<PageProps>) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })

  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">{t("title")}</h1>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        {t("description")}
      </p>

      <div className="mt-4 flex items-center gap-5">
        <Link
          href={`/${locale}/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          {t("get-started")}
        </Link>
        <Link
          href={`/${locale}/docs/examples/`}
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          {t("preview-examples")}
        </Link>
      </div>
    </section>
  )
}
