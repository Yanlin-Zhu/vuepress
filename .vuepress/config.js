module.exports = {
  title: 'zz',
  description: 'zz',
  head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://assets-cdn.github.com/favicon.ico` }]
  ],
  base: '/vuepress/',
  host: '127.0.0.1',
  port: 8080,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'zz', link: '/zz' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ 
          '/zz'
        ]
      }
    ]
  }
}