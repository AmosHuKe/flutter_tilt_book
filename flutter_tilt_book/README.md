# Flutter Tilt Book

This is the main documentation website project for Flutter Tilt.

## Prerequisites

|         | Version  |
| ------- | -------- |
| Node.js | v24.14.0 |
| NPM     | v11.9.0  |

## Documentation

|         | Link  |
| ------- | -------- |
| Next.js | [Link](https://nextjs.org/docs/) |
| Tailwind CSS | [Link](https://tailwindcss.com/docs/)  |
| shadcn/ui | [Link](https://ui.shadcn.com/docs/) |
| Radix UI | [Link](https://www.radix-ui.com/primitives/docs/) |
| next-intl | [Link](https://next-intl.dev) |
| React Icons | [Link](https://react-icons.github.io/react-icons/) |
| Mermaid | [Link](https://github.com/mermaid-js/mermaid) |
| Markdown | [Link](https://github.github.com/gfm/) |

## Getting started

```sh
# install dependencies
$ npm i

# start development server - http://localhost:3001/flutter_tilt_book/
$ npm run dev

# build for production (/out)
$ npm run build
```

## Editing documentation

The document menu can be edited in [`./settings/documents/`](./settings/documents/).

Document content is located in [`./contents/[version]/[locale]/`](./contents/).  
Files should be named `index.mdx` and written in [`Markdown`](https://github.github.com/gfm/).

### Metadata

The following metadata is supported at the top of each document:

```md
---
title: Changelog
description: xxxxxx
keywords: ["changelog", "xxx"]
---
```

### Custom components

You can use custom components in your MDX files. For example:

```jsx
<Note title="Important" type="success">
xxxxxx
</Note>
```

A full list of supported components can be found in [`./lib/components.ts`](./lib/components.ts).

## Internationalization (i18n)

- **i18n configuration**: [`./settings/i18n.ts`](./settings/i18n.ts)  
- **UI dictionaries**: [`./i18n/dictionaries/`](./i18n/dictionaries/)  
- **Document content**: [`./contents/[version]/[locale]/`](./contents/)  

To add a new locale:  
- Configure the locale in `./settings/i18n.ts`.  
- Add the locale to `SearchData` in `./settings/documents/search_data.ts`.  
- Create the corresponding directory structure and content in `./contents/[version]/[new-locale]/`.  

## Directory structure

```text
├── app/                    # Next.js application source files
│   ├── [locale]/           # Locale-specific pages and docs
│   │   ├── [version]/      # Version-specific pages and docs
│   │   │   ├── docs/       # Documentation pages
│   │   │   ├── layout.tsx  # Version layout
│   │   │   └── page.tsx    # Version main page
│   │   ├── layout.tsx      # Locale layout
│   │   └── page.tsx        # Locale main page
│   ├── error.tsx           # Global error page
│   ├── layout.tsx          # Root layout
│   ├── not-found.tsx       # 404 page
│   ├── page.tsx            # Main page
│   ├── robots.ts           # robots.txt generation
│   └── sitemap.ts          # sitemap.xml generation
├── components/             # Reusable UI components
│   ├── markdown/           # Markdown-related components
│   ├── navigation/         # Navigation components
│   ├── providers/          # Context providers
│   └── ui/                 # UI elements (shadcn/ui primitives)
├── contents/               # Documentation content for each locale
├── i18n/                   # i18n utilities and dictionaries
├── lib/                    # Library utilities and helpers
├── public/                 # Static assets (images, search data, etc.)
├── scripts/                # Scripts (e.g., search data generation via tsx)
├── settings/               # Project settings and configuration
├── styles/                 # Global and component styles
├── tools/                  # Build tools and scripts
...
```

## License

[![BSD-3-Clause License](https://img.shields.io/badge/License-BSD--3--Clause-green)](./LICENSE)  
Open sourced under the BSD-3-Clause license.  
© AmosHuKe
