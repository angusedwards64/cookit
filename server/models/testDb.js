const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'localhost',
    user: 'reuben',
    database: 'testcookit',
    port: 5432,
  },
})
