const db = require('./db')

exports.getById = async (id) => {
  try {
    const result = await db.select('*').from('users').where({ id }).first()
    return result
  } catch (e) {
    return e
  }
}

exports.getByEmail = async (email) => {
  try {
    const result = await db.from('users').where(email)
    return result
  } catch (e) {
    return e
  }
}

exports.add = async (data) => {
  try {
    const result = await db.insert(data).into('users').returning('*')
    console.log('hi')
    return result[0]
  } catch (e) {
  console.log('e',e)
    return e
  }
}

exports.deleteById = async (id) => {
  try {
    const result = await db.from('users').where({ id }).del()
    return result
  } catch (e) {
    return e
  }
}

