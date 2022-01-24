const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'localhost',
    user: 'reuben',
    // password: '100200300',
    database: 'cookit',
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
