---
title: iamkun/dayjs 一个轻量的处理时间和日期的 JavaScript 库
bg: clock.jpg
date: 2020-05-24
topic: NPM 扩展包
tags: 
  - 日期
---

[https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs)

> Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

```js
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Familiar Moment.js API & patterns
* 💪 Immutable
* 🔥 Chainable
* 🌐 I18n support
* 📦 2kb mini library
* 👫 All browsers supported

---

## Getting Started

### Documentation

You can find for more details, API, and other docs on [day.js.org](https://day.js.org/) website.

### Installation

```console
npm install dayjs --save
```

📚[Installation Guide](https://day.js.org/docs/en/installation/installation)

### API

It's easy to use Day.js APIs to parse, validate, manipulate, and display dates and times.

```javascript
dayjs('2018-08-08') // parse

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

dayjs().set('month', 3).month() // get & set

dayjs().add(1, 'year') // manipulate

dayjs().isBefore(dayjs()) // query
```

📚[API Reference](https://day.js.org/docs/en/parse/parse)

### I18n

Day.js has great support for internationalization.

But none of them will be included in your build unless you use it.

```javascript
import 'dayjs/locale/es' // load on demand

dayjs.locale('es') // use Spanish locale globally

dayjs('2018-05-05').locale('zh-cn').format() // use Chinese Simplified locale in a specific instance
```
📚[Internationalization](https://day.js.org/docs/en/i18n/i18n)

### Plugin

A plugin is an independent module that can be added to Day.js to extend functionality or add new features.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(advancedFormat) // use plugin

dayjs().format('Q Do k kk X x') // more available formats
```

📚[Plugin List](https://day.js.org/docs/en/plugin/plugin)

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/dayjs#sponsor)]

<a href="https://opencollective.com/dayjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/dayjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/dayjs/sponsor/3/avatar.svg"></a>

## Contributors

This project exists thanks to all the people who contribute.

Please give us a 💖 star 💖 to support us. Thank you.

And thank you to all our backers! 🙏

<a href="https://opencollective.com/dayjs/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/dayjs/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## License

Day.js is licensed under a [MIT License](./LICENSE).
