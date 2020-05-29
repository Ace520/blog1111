---
title: Vue Router路由管理器 
bg: vue.png
date: 2020-05-25
topic: Vue 扩展包
tags: 
  - Vue
  - vue-router
---

[Vue Router](https://github.com/vuejs/vue-router) 是 [Vue.js](https://github.com/vuejs/vue) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

## 功能
- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为

## 安装
#### CDN
``` javascript
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```
#### NPM
```
npm install vue-router
```
## 使用
#### src/router/index.js
``` javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {keepAlive: true}
    },
    ...
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
})

export default router
```
#### src/main.js 
```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
...
new Vue({
  router,
  ...
  render: h => h(App)
}).$mount('#app')
```

> 更多内容查看文档[https://router.vuejs.org/zh](https://router.vuejs.org/zh)