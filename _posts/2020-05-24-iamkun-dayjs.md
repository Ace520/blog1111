---
title: iamkun/dayjs 一个轻量的处理时间和日期的 JavaScript 库
bg: clock.jpg
date: 2020-05-24
topic: Vue 扩展包
tags: 
  - 日期
---

> [Day.js](https://github.com/iamkun/dayjs)是[Moment.js](https://github.com/moment/moment/) 的 2kB 轻量化方案，拥有同样强大的 API

- 🕒 和 Moment.js 相同的 API 和用法
- 💪 不可变数据 (Immutable)
- 🔥 支持链式操作 (Chainable)
- 🌐 国际化 I18n
- 📦 仅 2kb 大小的微型库
- 👫 全浏览器兼容

---

## 快速开始

### 文档

访问 [day.js.org](https://day.js.org/) 网站查看更详细的文档

### 安装

```console
npm install dayjs --save
```

📚[安装指南](https://day.js.org/docs/zh-CN/installation/installation)

### API

Day.js 有很多 API 来解析、处理、校验、增减、展示时间和日期

```javascript
dayjs('2018-08-08') // 解析

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // 展示

dayjs()
  .set('month', 3)
  .month() // 获取

dayjs().add(1, 'year') // 处理

dayjs().isBefore(dayjs()) // 查询
```

📚[API 参考](https://day.js.org/docs/zh-CN/parse/parse)

### 国际化 I18n

Day.js 支持国际化

但除非手动加载，多国语言默认是不会被打包到工程里的

```javascript
import 'dayjs/locale/es' // 按需加载

dayjs.locale('es') // 全局使用西班牙语

dayjs('2018-05-05')
  .locale('zh-cn')
  .format() // 在这个实例上使用简体中文
```

📚[国际化 I18n](https://day.js.org/docs/zh-CN/i18n/i18n)

### 插件

插件是一些独立的程序，可以给 Day.js 增加新功能和扩展已有功能

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // 按需加载插件

dayjs.extend(advancedFormat) // 使用插件

dayjs().format('Q Do k kk X x') // 使用扩展后的API
```

📚[插件列表](https://day.js.org/docs/zh-CN/plugin/plugin)