import { Paths } from "@/lib/pageroutes"

// i18n: ./i18n/dictionaries/{locale}.json | docs
export const Documents: Paths[] = [
  {
    title: "sidebar-menu.overview",
    href: "/overview",
  },
  {
    spacer: true,
  },
  {
    heading: "sidebar-menu.get-started.get-started",
    title: "sidebar-menu.get-started.installation",
    href: "/installation",
  },
  {
    title: "sidebar-menu.get-started.changelog",
    href: "/changelog",
  },
  {
    title: "sidebar-menu.get-started.migration-guides.migration-guides",
    href: "/migration-guides",
    isSubOpen: false,
    items: [
      {
        title: "sidebar-menu.get-started.migration-guides.migrate-to-v2-0-0",
        href: "/migrate-to-v2-0-0",
      },
      {
        title: "sidebar-menu.get-started.migration-guides.migrate-to-v0-1-0",
        href: "/migrate-to-v0-1-0",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "sidebar-menu.widgets.widgets",
    title: "sidebar-menu.widgets.tilt",
    href: "/widgets/tilt-widget",
  },
  {
    title: "sidebar-menu.widgets.tiltparallax",
    href: "/widgets/tiltparallax-widget",
  },
  {
    spacer: true,
  },
  {
    heading: "sidebar-menu.guides.guides",
    title: "sidebar-menu.guides.simple-usage",
    href: "/guides/simple-usage",
  },
  {
    title: "sidebar-menu.guides.tilt-with-controller",
    href: "/guides/tilt-with-controller",
  },
  {
    title: "sidebar-menu.guides.faq.faq",
    href: "/guides/faq",
    isSubOpen: false,
    items: [
      {
        title: "sidebar-menu.guides.faq.keep-the-tilt-angle",
        href: "/keep-the-tilt-angle",
      },
      {
        title: "sidebar-menu.guides.faq.how-to-disable-sensors",
        href: "/how-to-disable-sensors",
      },
      {
        title: "sidebar-menu.guides.faq.sensors-are-inactive-on-the-web",
        href: "/sensors-are-inactive-on-the-web",
      },
      {
        title:
          "sidebar-menu.guides.faq.how-to-make-the-shadow-match-the-content",
        href: "/how-to-make-the-shadow-match-the-content",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "sidebar-menu.examples.examples",
    title: "sidebar-menu.examples.examples",
    href: "/examples",
    isSubOpen: true,
    items: [
      {
        title: "sidebar-menu.examples.demo",
        href: "/demo",
      },
      {
        title: "sidebar-menu.examples.parallax-image",
        href: "/parallax-image",
      },
      {
        title: "sidebar-menu.examples.tilt-lightshadowmode",
        href: "/tilt-lightshadowmode",
      },
      {
        title: "sidebar-menu.examples.parallax-card",
        href: "/parallax-card",
      },
      {
        title: "sidebar-menu.examples.multiple-tilt",
        href: "/multiple-tilt",
      },
      {
        title: "sidebar-menu.examples.layout-demo",
        href: "/layout-demo",
      },
      {
        title: "sidebar-menu.examples.layout2-demo",
        href: "/layout2-demo",
      },
      {
        title: "sidebar-menu.examples.layout3-demo",
        href: "/layout3-demo",
      },
      {
        title: "sidebar-menu.examples.events",
        href: "/events",
      },
      {
        title: "sidebar-menu.examples.dialog",
        href: "/dialog",
      },
      {
        title: "sidebar-menu.examples.default",
        href: "/default",
      },
      {
        title: "sidebar-menu.examples.animation-demo",
        href: "/animation-demo",
      },
      {
        title: "sidebar-menu.examples.smooth-gesture-enter-demo",
        href: "/smooth-gesture-enter-demo",
      },
      {
        title: "sidebar-menu.examples.tilt-stream-controller-demo",
        href: "/tilt-stream-controller-demo",
      },
      {
        title: "sidebar-menu.examples.reverse-tilt",
        href: "/reverse-tilt",
      },
      {
        title: "sidebar-menu.examples.keep-tilt",
        href: "/keep-tilt",
      },
      {
        title: "sidebar-menu.examples.tilt-direction-demo",
        href: "/tilt-direction-demo",
      },
      {
        title: "sidebar-menu.examples.light-direction-demo",
        href: "/light-direction-demo",
      },
      {
        title: "sidebar-menu.examples.shadow-direction-demo",
        href: "/shadow-direction-demo",
      },
      {
        title: "sidebar-menu.examples.initial-tilt",
        href: "/initial-tilt",
      },
      {
        title: "sidebar-menu.examples.disable-effects",
        href: "/disable-effects",
      },
      {
        title: "sidebar-menu.examples.bento-grids",
        href: "/bento-grids",
      },
    ],
  },
]
