import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { UserConfig } from 'vitepress';

let vitePressConfigs: UserConfig<any> = {
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
}

let config = withSidebar(vitePressConfigs, [
  {
    documentRootPath: 'docs',
    scanStartPath: '必修',
    resolvePath: '/必修/',
    useTitleFromFileHeading: false
  },
  {
    documentRootPath: 'docs',
    scanStartPath: '选修',
    resolvePath: '/选修/',
    useTitleFromFrontmatter: false
  },
  {
    documentRootPath: 'docs',
    scanStartPath: '课外',
    resolvePath: '/课外/',
    useTitleFromFrontmatter: false
  },
  {
    documentRootPath: 'docs',
    scanStartPath: '学习资料',
    resolvePath: '/学习资料/',
    useTitleFromFrontmatter: false
  }
])

export default defineConfig(config)
