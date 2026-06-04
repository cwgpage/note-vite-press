import {learnList, learnHtmlList, learnCSSList, learnReplenishList,learnJsList} from './learn'
import {tutorialList} from './tutorial'
import {recommendList} from './recommend'

const sidebar = {
 // 学习
  "/learning/": learnList,
  "/learning/html/": learnHtmlList,
  "/learning/css/": learnCSSList,
  "/learning/JavaScript/": learnJsList,
  "/learning/replenish/": learnReplenishList,
  // 推荐
  "/recommend/": recommendList,
  // 教程
  "/tutorial/": tutorialList,
  
}


export default sidebar