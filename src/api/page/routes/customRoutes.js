
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/create-author',
        handler: 'page.createAuthor',
        config: {
          auth: false
        }
      }
    ]
  }