import express, { Express } from 'express'
import { Server } from 'http'
import { LoggerSerivce } from './logger/logger.service.js'
import { UserController } from './users/users.controller.js'

export class App {
  app: Express
  server: Server
  port: number
  logger: LoggerSerivce
  userController: UserController


  constructor(
    logger: LoggerSerivce,
    userController: UserController
  ) {
    this.app = express()
    this.port = 8000
    this.logger = logger
    this.userController = userController
  }

  useRoutes() {
    this.app.use('/users', this.userController.router)
  }

  public async init() {
    this.useRoutes()
    this.server = this.app.listen(this.port)
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
  }
}