import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "scu-docs",
  description: "notes in scu",
  head:[
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo:{
      light:"/logo.png",
      dark:""
    },
    nav: [
      { text: '主页', link: '/' },
      {
        text: '必修',
        items: [
          { text: "操作系统", link: "/必修/操作系统" },
          { text: "微机原理", link: "/必修/微机原理" },
          { text: "高等数学", link: "/必修/高等数学" },
        ]
      },
      {
        text: '选修',
        items: [
          { text: "待补充", link: "#" },
        ]
      },
      {
        text: '课外',
        items: [
          { text: "待补充", link: "#" },
        ]
      },
      { text: '学习资料', link: '/book' },
      { text: '贡献名单', link: '/background/team' },
    ],

    sidebar: [
      { text: '这是什么？', link: '/intro' },
      { text: '如何贡献？', link: '/contribute' },
      { text: '学习资料', link: '/book' },
      {
        text: '必修',
        items: [
          { text: "操作系统", link: "/必修/操作系统" },
          { text: "微机原理", link: "/必修/微机原理" },
          { text: "高等数学", link: "/必修/高等数学" },
        ]
      },
      {
        text: '选修',
        items: [
          { text: "待补充", link: "#" },
        ]
      },
      {
        text: '课外',
        items: [
          { text: "待补充", link: "#" },
        ]
      },
    ],

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
