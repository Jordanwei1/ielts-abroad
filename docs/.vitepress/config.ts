import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点标题
  title: '雅思留学移民全攻略',
  
  // GitHub Pages部署路径
  base: '/ielts-abroad/',
  
  // 站点描述(SEO)
  description: '雅思备考、留学申请、移民指南、海外生活一站式平台',
  
  // 语言
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '雅思备考',
        items: [
          { text: '听力', link: '/ielts/listening/' },
          { text: '阅读', link: '/ielts/reading/' },
          { text: '写作', link: '/ielts/writing/' },
          { text: '口语', link: '/ielts/speaking/' },
        ]
      },
      { 
        text: '留学移民',
        items: [
          { text: '留学申请', link: '/study/' },
          { text: '移民指南', link: '/immigration/' },
        ]
      },
      { 
        text: '海外生活',
        items: [
          { text: '海外美食', link: '/food/' },
          { text: 'CFA备考', link: '/cfa/' },
        ]
      },
      { 
        text: '投资理财',
        items: [
          { text: '量化交易', link: '/quant/' },
          { text: '加密货币', link: '/crypto/' },
        ]
      },
      { text: '使用指南', link: '/guide/' },
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jordanwei1/ielts-abroad' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2018-present'
    }
  }
})
