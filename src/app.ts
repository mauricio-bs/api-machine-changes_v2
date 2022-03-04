import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import routes from './routes'

require('dotenv').config({
  path: (process.env.NODE_ENV = 'test' ? '.env.test' : '.env')
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const whiteList = ['*']

app.use(
  cors({
    origin: whiteList,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    preflightContinue: false
  })
)

app.use(routes)

const httpServer = createServer(app)

export { httpServer, app }
