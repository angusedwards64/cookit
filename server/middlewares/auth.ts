const JWT = require('jsonwebtoken')
const USER = require('./../models/users')
const SECRETKEY = process.env.SECRET_KEY || 'not secure'

const authMiddle = async (req, res, next) => {
  const token = req.headers['jwt']
  if (!token) return res.sendStatus(403)
  try {
    const { id } = JWT.verify(token, SECRET_KEY)
    const currentUser = await USER.getById(id)
    if (!currentUser) return res.sendStatus(401)
    req.user = currentUser
    next()
  } catch (error) {
    res.sendStatus(401)
  }
}

module.exports = authMiddle
