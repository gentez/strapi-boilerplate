// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
//     mysql: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     mysql2: {
//       connection: {
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', '.tmp/data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };
    // strapi-api/config/database.js
    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       // connectionString: env('DATABASE_URL',"postgres://host=devmarketplace-strapi.cpsih1xiv3b8.ap-southeast-2.rds.amazonaws.com port=5432 dbname=devmarketplace user=jaalnet password=jaalnet12345 sslmode=false connect_timeout=10"),
    //       host: env('DATABASdpg-cjf29dgcfp5c73f03d20-aE_HOST', 'jaalnet-strapi.cpsih1xiv3b8.ap-southeast-2.rds.amazonaws.com'),
    //       port: env.int('DATABASE_PORT', 5432),
    //       database: env('DATABASE_NAME', 'jaalnet-strapi'),
    //       user: env('DATABASE_USERNAME', 'strapiadmin'),
    //       password: env('DATABASE_PASSWORD', 'strapiadmin12345'),
    //       ssl: {
    //         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
    //       },
    //     },
    //     debug: false,
    //   },
    // });

    module.exports = ({ env }) => ({
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST"),
          port: env.int("DATABASE_PORT"),
          database: env("DATABASE_NAME"),
          user: env("DATABASE_USERNAME"),
          password: env("DATABASE_PASSWORD"),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        useNullAsDefault: true,
      },
    });
