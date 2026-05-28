import {learnList, learnHtmlList, learnCSSList, learnReplenishList,learnJsList} from './learn'
import {tutorialList} from './tutorial'

const sidebar = {
 // 学习
  "/learning/": learnList,
  "/learning/html/": learnHtmlList,
  "/learning/css/": learnCSSList,
  "/learning/JavaScript/": learnJsList,
  "/learning/replenish/": learnReplenishList,
  // 教程
  "/tutorial/": tutorialList,
  // 推荐
}


export default sidebar