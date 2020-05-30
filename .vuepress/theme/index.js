const staticUrl = 'https://raw.githubusercontent.com/Ace520/blog/master/static/';

module.exports = {
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/post/',
          layout: 'FrontmatterPagination',
          itemLayout: 'Post',
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          frontmatter: { title: '标签' },
          layout: 'Tag',
        },
        {
          id: "topic",
          keys: ['topic', 'topics'],
          path: '/topic/',
          frontmatter: { title: '话题' },
          layout: 'Topic',
        },
      ],
      sitemap: {
        hostname: 'https://ace520.github.io/blog'
      },
      // comment: {
      //   service: 'vssue',
      //   owner: 'Ace520',
      //   repo: 'blog',
      //   clientId: 'Iv1.535c99f0a882ed45',
      //   clientSecret: '6ec379adea91d41358679a159e6688a258dff8a9',
      // },
      feed: {
        canonical_base: 'https://ace520.github.io/blog'
      },
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-medium-zoom', {
      selector: '.article img',
      delay: 1000,
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
      },
    }],
    ['vuepress-plugin-smooth-scroll'],
    ['vuepress-plugin-container', {
      type: 'audio',
      before: info => `<audio id="audio" controls="" preload="none"><source id="mp3" src="${info}`,
      after: '"></audio>',
    }],
    ['social-share', {
      // networks: ['twitter', 'facebook', 'reddit', 'telegram'],
      // twitterUser: 'ntnyq',
      // weiboAppKey: 'your_app_key',
      // fallbackImage: '/hero.png',
      // autoQuote: true,
      // isPlain: false,
      // extendsNetworks,
      noGlobalSocialShare: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/google-analytics', {
      'ga': 'UA-167995366-1'
    }]
  ],
}
