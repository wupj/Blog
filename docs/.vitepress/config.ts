import { defineConfig } from 'vitepress'

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
            { text: 'JavaScript', link: 'base/javaScript/index' },
            { text: 'CSS', link: 'base/css/index' },
            { text: 'HTML', link: 'base/html/index' }
          ]
        },
        {
          text: '前端框架',
          items: [
            { text: 'Vue', link: 'framework/vue/index' },
            { text: 'React', link: 'framework/react/index' }
          ]
        },
        {
          text: '前端可视化',
          link: '/chart/index'
        },
      ]},
      
      { text: '面试题', link: '/interview/index' },
      { text: 'GitHub', link: 'https://github.com/wupj' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '更新时间',
  },
})