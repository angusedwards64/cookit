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
