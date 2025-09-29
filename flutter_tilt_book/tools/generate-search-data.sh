#!/bin/sh

npx tsc --project tsconfig.scripts.json

for file in dist/scripts/**/*.js; do
  mv "$file" "${file%.js}.mjs"
done

FILES_TO_PROCESS="\
dist/scripts/scripts/generate-search-data.mjs \
dist/scripts/lib/pageroutes.mjs \
dist/scripts/i18n/routing.mjs \
"

for file in $FILES_TO_PROCESS; do
  if [ -f "$file" ]; then
    echo "Processing $file..."

    sed -i 's|import { Documents } from "@/settings/documents"|import { Documents } from "../settings/documents.mjs"|g' "$file"
    sed -i 's|import { I18nSettings } from "@/settings/i18n"|import { I18nSettings } from "../settings/i18n.mjs"|g' "$file"
    sed -i 's|import { routing } from "@/i18n/routing"|import { routing } from "../i18n/routing.mjs"|g' "$file"

    if [ $? -ne 0 ]; then
      echo "Error: Failed to update $file"
      exit 1
    fi
    
    echo "$file updated successfully."
  else
    echo "$file not found!"
  fi
done

# 运行脚本生成 generate-search-data
echo "Processing generate-search-data.mjs..."
if node dist/scripts/scripts/generate-search-data.mjs; then
  echo "public/search-data/... generate successfully."
else
  echo "Error: Failed to generate search data"
  exit 1
fi
