const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
import { Request, Response, NextFunction } from 'express';

const multerMiddle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req)
    const file = await upload.single('photo')
    file
    next()
  } catch (error) {
    console.log(error)
    res.sendStatus(401)
  }
}

module.exports = multerMiddle
