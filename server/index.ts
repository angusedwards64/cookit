'use strict'
import { Request, Response, NextFunction } from 'express';
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
}

const PORT = process.env.PORT || 5001
const app = express()

const Router = require('./router.js')

app.use(morgan('dev'))
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(Router)
app.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 Page Not Found')
})

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
