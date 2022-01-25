const database = require('./db')

interface Data {
  id: string;
}

exports.getById = async (id: string) => {
  try {
    const result = await database.select('*').from('users').where({ id }).first()
    return result
  } catch (e) {
    return e
  }
}

exports.getByEmail = async (email: string) => {
  try {
    const result = await database.from('users').where(email)
    return result
  } catch (e) {
    return e
  }
}

exports.add = async (data: Data) => {
  try {
    const result = await database.insert(data).into('users').returning('*')
    console.log('hi')
    return result[0]
  } catch (e) {
  console.log('e',e)
    return e
  }
}
