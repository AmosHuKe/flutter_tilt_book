import { Paths } from "@/lib/pageroutes"

export const documents_v3_zh: Paths[] = [
  {
    title: "介绍",
    href: "/overview",
  },
  {
    spacer: true,
  },
  {
    heading: "开始",
    title: "安装",
    href: "/installation",
  },
  {
    title: "更新日志",
    href: "/changelog",
  },
  {
    title: "迁移指南",
    href: "/migration-guides",
    isSubOpen: false,
    items: [
      {
        title: "^1.0.0 到 ^2.0.0",
        href: "/migrate-to-v2-0-0",
      },
      {
        title: "^0.0.1 到 ^0.1.0",
        href: "/migrate-to-v0-1-0",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Widget",
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
    heading: "指南",
    title: "简单使用",
    href: "/guides/simple-usage",
  },
  {
    title: "Tilt 控制器",
    href: "/guides/tilt-with-controller",
  },
  {
    title: "常见问题",
    href: "/guides/faq",
    isSubOpen: false,
    items: [
      {
        title: "保持倾斜角度",
        href: "/keep-the-tilt-angle",
      },
      {
        title: "如何禁用传感器",
        href: "/how-to-disable-sensors",
      },
      {
        title: "传感器失效 (Web)",
        href: "/sensors-are-inactive-on-the-web",
      },
      {
        title: "如何使阴影与内容匹配",
        href: "/how-to-make-the-shadow-match-the-content",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "示例",
    title: "示例",
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
