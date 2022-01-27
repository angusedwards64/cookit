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

// module.exports = knex({
//   client: 'postgres',
//   connection: {
//     host: 'localhost',
//     user: 'reuben',
//     database: 'testcookit',
//     port: 5432,
//   },
// })
