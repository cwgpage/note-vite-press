# vue-page-stack

`vue-page-stack` 当前面向 Vue 3。Vue 2 版本请查看 [v1.5.0](https://github.com/hezhongfeng/vue-page-stack/tree/v1.5.0)。

![vue-page-stack](https://fastly.jsdelivr.net/gh/cwgpage/image@master/2026/2026-05-26_1779774274249.gif)

---

一个面向 Vue 3 的单页应用页面栈组件，让返回导航更接近原生 App，而不是每次都重新挂载页面。

## Example

[预览](https://vue-page-stack.hezf.online/#/) · [示例源码](https://github.com/hezhongfeng/vue-page-stack-example)

## 功能特性

- 基于 `vue-router` 扩展，不需要改动原有路由定义
- `push` 和 `forward` 会渲染新页面并压入页面栈
- `back` 和 `go(-n)` 会优先从页面栈恢复旧页面，保留表单、滚动位置等本地状态
- 回退后会清理不再可达的页面栈项
- `replace` 会覆盖当前栈顶页面
- 暴露 `back` / `forward` 事件，方便做方向感知动画
- 支持浏览器后退和前进按钮

## 和 KeepAlive 的区别

- `VuePageStack` 按导航顺序管理页面，不提供 `include`、`exclude`、`max`
- KeepAlive 会持续保留已缓存页面，而 VuePageStack 会清理不再可达的页面
- 再次进入同一路由时会重新渲染页面，只有返回上一级时才会恢复缓存实例

## 安装和用法

### 安装

```bash
pnpm install vue-page-stack
```

### 使用

```javascript
// main.js 中
import { createApp } from 'vue'
import { VuePageStackPlugin } from 'vue-page-stack'

const app = createApp(App)

app.use(VuePageStackPlugin, { router })
```

```html
<!-- app.vue 中 -->
<template>
  <router-view v-slot="{ Component }">
    <vue-page-stack @back="onBack" @forward="onForward">
      <component :is="Component" :key="$route.fullPath" />
    </vue-page-stack>
  </router-view>
</template>

<script setup>
const onBack = () => {
  console.log('back')
}

const onForward = () => {
  console.log('forward')
}
</script>
```

> 建议为路由组件提供稳定的 key。大多数场景下，`$route.fullPath` 是最稳妥的默认值，因为它会把不同参数和查询串视为不同的栈项。

### 使用说明

- 默认插槽应只渲染一个路由组件 vnode，页面栈逻辑才会生效
- 如果默认插槽里有多个子节点，组件会直接透传，不做缓存处理
- 当前实现依赖 Vue renderer 内部行为，升级 Vue 后建议先跑完整测试