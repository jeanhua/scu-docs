import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: any) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    giscusTalk({
      repo: 'jeanhua/scu-docs',
      repoId: 'R_kgDOPzba7w',
      category: 'General',
      categoryId: 'DIC_kwDOPzba784CvsnL',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      lightTheme: 'light',
      darkTheme: 'transparent_dark',
    }, {
      frontmatter,
      route
    }, true);
  },
  extends: Teek
};