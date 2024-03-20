import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Houjin.Tech",
  description: "ZHJ0125的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
