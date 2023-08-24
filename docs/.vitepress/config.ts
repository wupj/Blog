import { defineConfig } from 'vitepress'
import getSidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '丿一盏孤灯丿的Blog',
  outDir: '../dist',
  lastUpdated: true,
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/logo.svg` }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '笔记', items: [
        {
          text: '基础',
          items: [
            { text: 'JavaScript', link: 'note/base/javaScript/index' },
            { text: 'CSS', link: 'note/base/css/index' },
            { text: 'HTML', link: 'note/base/html/index' }
          ]
        },
        {
          text: '前端框架',
          items: [
            { text: 'Vue', link: 'note/framework/vue/index' },
            { text: 'React', link: 'note/framework/react/index' }
          ]
        },
        {
          text: '前端可视化',
          link: 'note/chart/index'
        },
      ]},
      
      { text: '面试题', link: '/interview/index' },
      { text: 'GitHub', link: 'https://github.com/wupj' }
    ],

    sidebar: {
      '/note/': getSidebar('docs', 'note'),
      '/interview/': getSidebar('docs', 'interview')
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '更新时间',
  },
})
