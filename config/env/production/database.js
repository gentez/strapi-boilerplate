// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse("host=localhost port=5432 dbname=postgres user=postgres password=xxxxxxx sslmode=prefer connect_timeout=10");
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host:"dpg-cjf29dgcfp5c73f03d20-a",
        port:5432,
        database:"testdb_6qob",
        user:"admin",
        password:"Xs94O2TLfRkWwZWwND4dEXX1PBl1dske",
        uri:"postgres://admin:Xs94O2TLfRkWwZWwND4dEXX1PBl1dske@dpg-cjf29dgcfp5c73f03d20-a.oregon-postgres.render.com/testdb_6qob",
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
