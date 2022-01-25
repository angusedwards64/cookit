const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users')
const SECRET_KEY = process.env.SECRET_KEY || 'not secure'
import { Request, Response, NextFunction } from 'express';

exports.create = async (req: Request, res: Response, next: NextFunction) => {
  const { name, username, email, password } = req.body
  const checkUser = await User.getByEmail({ email })
  console.log(checkUser);
  if (checkUser.length)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' })
  try {
    if (password === '') throw new Error()
    const hash = await bcrypt.hash(password, 10)
    const newUser = { name, username, email, password: hash }
    const user = await User.add(newUser)
    const accessToken = jwt.sign(user.id, SECRET_KEY, { expiresIn: '5h' })
    res.status(201).send({ accessToken, user })
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' })
  }
}

exports.login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  try {
    const user = await User.getByEmail({ email })
    const validatedPass = await bcrypt.compare(password, user[0].password)
    if (!validatedPass) throw new Error()
    const accessToken = jwt.sign({ id: user[0].id }, SECRET_KEY, { expiresIn: '5h' })
    res.status(200).send({ accessToken, user })
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' })
  }
}

// const logout = (req, res) => {

// }

// module.exports = { create, login }
