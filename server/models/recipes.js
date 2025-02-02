const db = require('./db')

exports.getById = async (id) => {
  try {
    const result = await db
      .select('recipes.*', 'cuisines.cuisine', 'users.username')
      .from('recipes')
      .leftJoin('cuisines', 'recipes.cuisine_id', 'cuisines.id')
      .leftJoin('users', 'recipes.user_id', 'users.id')
      .where('recipes.id', '=', id)
      .first()
    return result
  } catch (e) {
    return e
  }
}
exports.list = async () => {
  try {
    const result = await db
      .select('recipes.*', 'cuisines.cuisine', 'users.username')
      .from('recipes')
      .leftJoin('cuisines', 'recipes.cuisine_id', 'cuisines.id')
      .leftJoin('users', 'recipes.user_id', 'users.id')
      .orderBy('recipes.updated_at', 'desc')
    return result
  } catch (e) {
    return e
  }
}
exports.add = async (data) => {
  console.log('addfunction', data)
  try {
    const result = await db.insert(data).into('recipes').returning('*')
    return result
  } catch (e) {
    return e
  }
}

exports.edit = async (data) => {
  try {
    const result = await db.update(data).from('recipes').where({ id: data.id })
    return result
  } catch (e) {
    return e
  }
}

exports.deleteById = async (id) => {
  try {
    const result = await db.from('recipes').where({ id }).del()
    return result
  } catch (e) {
    return e
  }
}
