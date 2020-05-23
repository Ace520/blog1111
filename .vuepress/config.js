module.exports = {
  title: 'ACE-BLOG',
  base: '/blog/',
  description: 'Ace blog',
  themeConfig: {
    nav: [
      { text: '博文', link: '/post/', layouts:['FrontmatterPagination', 'Post'] },
      { text: '归档', link: '/archive', layouts:['ArchiveLayout'] },
      { text: '分类', link: '/category', layouts:['CategoryLayout'] },
      { text: '关于', link: '/about', layouts:['aboutLayout'] },
    ],
    dateFormat: 'YYYY-MM-DD',
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    paginationComponent: 'Pagination',
    smoothScroll: true,
    staticUrl: 'https://raw.githubusercontent.com/Ace520/blog/master/static/',
    defaultBg: '1.jpg',
    projects: [
      {
        title: 'CheatSheet',
        summary: '速查表',
        img: '1.jpg',
        url: 'https://ace520.github.io/cheatsheet'
      },
      {
        title: 'laravel-admin-vue',
        summary: 'Laravel-admin使用vue前后端分离版',
        img: '2.jpg',
        url: 'https://laravel-admin.org/'
      },
      {
        title: 'Marvel Universe',
        summary: '漫威宇宙：更易于调用的漫威API',
        img: '3.jpg',
        url: 'https://developer.marvel.com/'
      }
    ]
  },
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  }
}
