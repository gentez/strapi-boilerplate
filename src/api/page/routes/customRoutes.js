
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/create-author',
        handler: 'page.createAuthor',
        config: {
          auth: false
        }
      },
      {
        method: 'POST',
        path: '/update-author',
        handler: 'page.updateAuthor',
        config: {
          auth: false
        }
      },
      {
        method: 'GET',
        path: '/pageData/:slug',
        handler: 'page.getPageData',
      }
    ]
  }