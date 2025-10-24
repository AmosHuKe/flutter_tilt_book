import typescriptParser from "@typescript-eslint/parser"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextTypescript,
  ...nextVitals,
  prettier,
  {
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
    },
  },
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])

export default eslintConfig
