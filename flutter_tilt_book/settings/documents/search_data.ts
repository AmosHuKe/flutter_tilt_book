import searchJsonV3En from "@/public/search-data/v3/en/documents.json"
import searchJsonV3Zh from "@/public/search-data/v3/zh/documents.json"
import searchJsonV4En from "@/public/search-data/v4/en/documents.json"
import searchJsonV4Zh from "@/public/search-data/v4/zh/documents.json"

import type { SearchDocument } from "@/lib/search-data-utils"

export type SearchDataType = {
  [version: string]: {
    [locale: string]: SearchDocument[]
  }
}

export const SearchData: SearchDataType = {
  v4: {
    en: searchJsonV4En,
    zh: searchJsonV4Zh,
  },
  v3: {
    en: searchJsonV3En,
    zh: searchJsonV3Zh,
  },
}
