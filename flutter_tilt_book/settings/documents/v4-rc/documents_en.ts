import { Paths } from "@/lib/pageroutes"

export const documents_v4_en: Paths[] = [
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
    title: "Simple usage",
    href: "/guides/simple-usage",
  },
  {
    spacer: true,
  },
  {
    heading: "Upgrade",
    title: "Changelog",
    href: "/changelog",
  },
  {
    title: "Migration guides",
    href: "/migration-guides",
    isSubOpen: false,
    items: [
      {
        title: "^3.0.0 to ^4.0.0",
        href: "/migrate-to-v4-0-0",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Guides",
    title: "Guides",
    href: "/guides",
    noLink: true,
    isSubOpen: false,
    items: [
      {
        title: "Tilt with controller",
        href: "/tilt-with-controller",
      },
      {
        title: "Keep tilt angle",
        href: "/keep-tilt-angle",
      },
      {
        title: "Disable sensors",
        href: "/disable-sensors",
      },
      {
        title: "Match shadow to content",
        href: "/match-shadow-to-content",
      },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
    noLink: true,
    isSubOpen: false,
    items: [
      {
        title: "Sensors are inactive (Web)",
        href: "/sensors-are-inactive-on-the-web",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Widgets",
    title: "Tilt",
    href: "/widgets/tilt-widget",
  },
  {
    title: "Tilt container",
    href: "/widgets/tilt-container",
    isSubOpen: true,
    items: [
      {
        title: "TiltBaseContainer",
        href: "/tilt-base-container-widget",
      },
      {
        title: "TiltProjectorContainer",
        href: "/tilt-projector-container-widget",
      },
    ],
  },
  {
    title: "TiltParallax",
    href: "/widgets/tilt-parallax-widget",
  },
  {
    title: "TiltAnimatedBuilder",
    href: "/widgets/tilt-animated-builder-widget",
  },
  {
    spacer: true,
  },
  {
    heading: "Examples",
    title: "Examples",
    href: "/examples",
    isSubOpen: true,
    items: [
      {
        title: "Demo",
        href: "/demo",
      },
      {
        title: "Parallax Image",
        href: "/parallax-image",
      },
      {
        title: "LightShadowMode",
        href: "/tilt-lightshadowmode",
      },
      {
        title: "Parallax Card",
        href: "/parallax-card",
      },
      {
        title: "Multiple Tilt",
        href: "/multiple-tilt",
      },
      {
        title: "Layout",
        href: "/layout-demo",
      },
      {
        title: "Layout2",
        href: "/layout2-demo",
      },
      {
        title: "Layout3",
        href: "/layout3-demo",
      },
      {
        title: "Events",
        href: "/events",
      },
      {
        title: "Dialog",
        href: "/dialog",
      },
      {
        title: "Default",
        href: "/default",
      },
      {
        title: "Animation",
        href: "/animation-demo",
      },
      {
        title: "Smooth Gesture Enter",
        href: "/smooth-gesture-enter-demo",
      },
      {
        title: "TiltStreamController",
        href: "/tilt-stream-controller-demo",
      },
      {
        title: "Reverse Tilt",
        href: "/reverse-tilt",
      },
      {
        title: "Keep Tilt",
        href: "/keep-tilt",
      },
      {
        title: "Tilt Direction",
        href: "/tilt-direction-demo",
      },
      {
        title: "Light Direction",
        href: "/light-direction-demo",
      },
      {
        title: "Shadow Direction",
        href: "/shadow-direction-demo",
      },
      {
        title: "Initial Tilt",
        href: "/initial-tilt",
      },
      {
        title: "Disable Effects",
        href: "/disable-effects",
      },
      {
        title: "Bento Grids",
        href: "/bento-grids",
      },
    ],
  },
]
