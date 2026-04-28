import type { Paths } from "@/lib/pageroutes"

import { documents_v3_en } from "./v3/documents_en"
import { documents_v3_zh } from "./v3/documents_zh"
import { documents_v4_en } from "./v4-rc/documents_en"
import { documents_v4_zh } from "./v4-rc/documents_zh"

export type DocumentsType = {
  [version: string]: {
    [locale: string]: Paths[]
  }
}

export const Documents: DocumentsType = {
  "v4-rc": {
    en: documents_v4_en,
    zh: documents_v4_zh,
  },
  v3: {
    en: documents_v3_en,
    zh: documents_v3_zh,
  },
}
