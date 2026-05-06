import { Paths } from "@/lib/pageroutes"

export const documents_v4_zh: Paths[] = [
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
    title: "简单用法",
    href: "/guides/simple-usage",
  },
  {
    spacer: true,
  },
  {
    heading: "升级",
    title: "更新日志",
    href: "/changelog",
  },
  {
    title: "迁移指南",
    href: "/migration-guides",
    isSubOpen: false,
    items: [
      {
        title: "^3.0.0 到 ^4.0.0",
        href: "/migrate-to-v4-0-0",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "指南",
    title: "指南",
    href: "/guides",
    noLink: true,
    isSubOpen: false,
    items: [
      {
        title: "Tilt 控制器",
        href: "/tilt-with-controller",
      },
      {
        title: "保持倾斜角度",
        href: "/keep-tilt-angle",
      },
      {
        title: "禁用传感器",
        href: "/disable-sensors",
      },
      {
        title: "使阴影与内容相匹配",
        href: "/match-shadow-to-content",
      },
    ],
  },
  {
    title: "常见问题",
    href: "/faq",
    noLink: true,
    isSubOpen: false,
    items: [
      {
        title: "传感器失效 (Web)",
        href: "/sensors-are-inactive-on-the-web",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Widget",
    title: "Tilt",
    href: "/widgets/tilt-widget",
  },
  {
    title: "Tilt 容器",
    href: "/widgets/tilt-container",
    isSubOpen: false,
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
    heading: "示例",
    title: "示例",
    href: "/examples",
    isSubOpen: false,
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
