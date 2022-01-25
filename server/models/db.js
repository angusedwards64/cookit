const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    user: 'gooseeduardos',
    password: '',
    database: 'cookit2',
    port: 5432,
  },
})

// const env = process.env

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       host: env.POSTGRES_HOST,
//       database: env.POSTGRES_DATABASE,
//       user: env.POSTGRES_USERNAME,
//       password: env.POSTGRES_PASSWORD,
//     },
//   },
// }
