import {defineConfig} from 'vitepress'
import nav from './nav'
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "浮生若梦",
  description: "行于人间，观山看水，记些旧事，写些闲心。\n世事如风，来去无声；唯愿以字为灯，照见一隅清明。",
  base: '/note-vite-press/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // @ts-ignore
    nav,
    sidebar,
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  }
})
