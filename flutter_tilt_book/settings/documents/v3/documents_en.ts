import { Paths } from "@/lib/pageroutes"

export const documents_v3_en: Paths[] = [
  {
    title: "Overview",
    href: "/overview",
  },
  {
    spacer: true,
  },
  {
    heading: "Get Started",
    title: "Installation",
    href: "/installation",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
  {
    title: "Migration guides",
    href: "/migration-guides",
    isSubOpen: false,
    items: [
      {
        title: "^1.0.0 to ^2.0.0",
        href: "/migrate-to-v2-0-0",
      },
      {
        title: "^0.0.1 to ^0.1.0",
        href: "/migrate-to-v0-1-0",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Widgets",
    title: "Tilt widget",
    href: "/widgets/tilt-widget",
  },
  {
    title: "TiltParallax widget",
    href: "/widgets/tiltparallax-widget",
  },
  {
    spacer: true,
  },
  {
    heading: "Guides",
    title: "Simple usage",
    href: "/guides/simple-usage",
  },
  {
    title: "Tilt with controller",
    href: "/guides/tilt-with-controller",
  },
  {
    title: "FAQ",
    href: "/guides/faq",
    isSubOpen: false,
    items: [
      {
        title: "Keep the tilt angle",
        href: "/keep-the-tilt-angle",
      },
      {
        title: "How to disable sensors",
        href: "/how-to-disable-sensors",
      },
      {
        title: "Sensors are inactive (Web)",
        href: "/sensors-are-inactive-on-the-web",
      },
      {
        title: "How to make the shadow match the content",
        href: "/how-to-make-the-shadow-match-the-content",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Examples",
    title: "Examples",
    href: "/examples",
  },
]
