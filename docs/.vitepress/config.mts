import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { AnnouncementPlugin } from 'vitepress-plugin-announcement';

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
  vite: {
    plugins: [
      AnnouncementPlugin({
        title: '公告',
        body: [
          {
            type: "text",
            content: '重要通知',
            style: "color: red; font-weight:bold; font-size: 1.5rem"
          },
          {
            type: "text",
            content: "由于123网盘调整下载规则，本站所有资料在下载时提示需要支付下载费用，为123网盘收取，与本站无关。如果不想支付，请在下载页面点击 **登录** 后即可免费下载，或者下载123网盘客户端也可免费下载",
            style:"text-align: left; color: #0a1013ff"
          },
          {
            type:"text",
            content:"本站后续资料也将转向其他网盘存储"
          },
        ],
        footer: [
          {
            type:'button',
            content:'源码',
            link:'https://github.com/jeanhua/scu-docs',
            props:{
              type: 'success'
            }
          },
          {
            type:'button',
            content:'组织',
            link:'https://github.com/The-Brotherhood-of-SCU'
          }
        ],
      })
    ]
  }
})
