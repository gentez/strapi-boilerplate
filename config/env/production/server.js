// Path: ./config/env/production/server.js
// starting from Strapi v 4.6.1 server.js has to be the following

module.exports = ({ env }) => ({
    proxy: true,
    host: "0.0.0.0",
    port: process.env.PORT,
    url: "https://strapi-dev-instance-f7085145878d.herokuapp.com/",
    app: { 
      keys: ["company","name"]
    },
    admin: {
      auth: {
        secret: 'w8b9Hj0a1qSPUJ01i8Wagw',
      },
    },
  })
  