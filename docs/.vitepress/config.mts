import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({});

export default defineConfig({
  extends: teekConfig,
  title: "scu-docs",
  description: "notes in scu",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: {
      light: "/logo.png",
      dark: ""
    },
    nav: [
      { text: '主页', link: '/' },
      {
        text: '必修', link: "/必修/"
      },
      {
        text: '选修', link: "/选修/"
      },
      {
        text: '课外', link: "/课外/"
      },
      { text: '学习资料', link: '/学习资料/' },
      { text: '贡献名单', link: '/background/team' },
    ],

    //sidebar:{},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jeanhua/scu-docs' }
    ],

    outline: {
      level: "deep"
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 scu-docs'
    },
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  ignoreDeadLinks: true,
})
