/** 学习列表 */
export const learnList = [
  {
    text: ' 基础',
    items: [
      { text: 'HTML', link: '/learning/html'},
      {text: 'CSS', link: '/learning/css'},
      {text: 'JavaScript', link: '/learning/JavaScript/base/base'},
    ]
  },
  {
    text: '框架',
    items: [
      {text: 'Vue', link: '/learning/vue'},
      {text: 'React', link: '/learning/react'}
    ]
  },
  {
    text: '其它',
    items: [
      {text: '知识补充', link: '/learning/replenish'},
    ]
  },
]

/** html */
export const learnHtmlList =  [
  {
    text: '基础',
    collapsed: false,
    items: [
      {
        text: '什么是HTML', 
        link: '/learning/html/base/base',
      }
    ]
  },
  {
    text: '标签',
    collapsed: false,
    items: [
      {
        text: '容器标签', 
        link: '/learning/html/tag/view',
      },
      {
        text: '基础内容', 
        link: '/learning/html/tag/content',
      },
      {
        text: '媒体标签', 
        link: '/learning/html/tag/media',
      },
      {
        text: '表单标签', 
        link: '/learning/html/tag/form',
      }
    ]
  },
]

/** css */
export const learnCSSList = [
  {
    text: '基础',
    link: '/learning/css/base/base',
  },
  {
    text: '基本样式',
    link: '/learning/css/style/base'
  },
  {
    text: 'CSS变量',
    link: '/learning/css/variable'
  },
]

/** js */
export const learnJsList = [
  {
    text: 'JavaScript教程',
    collapsed: false,
    items: [
      { text: '介绍', link: '/learning/JavaScript/base/intro',},
      { text: '基础语法', link: '/learning/JavaScript/base/base',},
      { text: '数据类型', link: '/learning/JavaScript/base/base',},
      { text: '循环', link: '/learning/JavaScript/base/cycle'},
      { text: '字符串', link: '/learning/JavaScript/base/String'},
      { text: '数字', link: '/learning/JavaScript/base/Number'},
      { text: '数组', link: '/learning/JavaScript/base/Array'},
      { text: '函数', link: '/learning/JavaScript/base/Function'},
      { text: '对象', link: '/learning/JavaScript/base/Object'},
      { text: '类', link: '/learning/JavaScript/base/Class'},
    ]
  },
  {
    text: '基础库',
    collapsed: false,
    items: [
      { text: '什么是JavaScript', link: '/learning/JavaScript/base/base'},
     
    ]
  },
  {
    text: '常用方法',
    collapsed: false,
    items: [
      { text: '文件处理', link: '/learning/JavaScript/base/base',},
      { text: '时间处理',  link: '/learning/JavaScript/base/base',}
    ]
  },
  
]

/** 补充 */
export const learnReplenishList = [
  {
    text: '补充1',
    link: '/learning/replenish/index',
  },
]