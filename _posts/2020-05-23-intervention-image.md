---
title: intervention/image 图片处理扩展包
bg: laravel.jpg
date: 2020-05-23
topic: Laravel 扩展包
tags: 
  - laravel
  - 图片
---

[https://github.com/Intervention/image](https://github.com/Intervention/image)

# Intervention Image

Intervention Image is a **PHP image handling and manipulation** library providing an easier and expressive way to create, edit, and compose images. The package includes ServiceProviders and Facades for easy **Laravel** integration.

## Requirements

- PHP >=5.4
- Fileinfo Extension

## Supported Image Libraries

- GD Library (>=2.0)
- Imagick PHP extension (>=6.5.7)

## Getting started

- [Installation](http://image.intervention.io/getting_started/installation)
- [Laravel Framework Integration](http://image.intervention.io/getting_started/installation#laravel)
- [Basic Usage](http://image.intervention.io/use/basics)

## Code Examples

```php
// open an image file
$img = Image::make('public/foo.jpg');

// resize image instance
$img->resize(320, 240);

// insert a watermark
$img->insert('public/watermark.png');

// save image in desired format
$img->save('public/bar.jpg');
```

Refer to the [official documentation](http://image.intervention.io/) to learn more about Intervention Image.
