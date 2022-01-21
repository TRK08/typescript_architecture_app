import express, { Express } from 'express'
import { userRouter } from './users/users.js'
import { Server } from 'http'
import { LoggerSerivce } from './logger/logger.service.js'

export class App {
  app: Express
  server: Server
  port: number
  logger: LoggerSerivce


  constructor(logger: LoggerSerivce) {
    this.app = express()
    this.port = 8000
    this.logger = logger
  }

  useRoutes() {
    this.app.use('/users', userRouter)
  }

  public async init() {
    this.useRoutes()
    this.server = this.app.listen(this.port)
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
  }
}