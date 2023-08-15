
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/page/:slug',
        handler: 'page.findBySlug',
      },{
        method: 'GET',
        path: '/pagesName',
        handler: 'page.allPages',
      }
    ]
  }