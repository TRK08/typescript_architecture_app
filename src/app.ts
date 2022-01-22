import express, { Express } from 'express'
import { Server } from 'http'
import { ExceptionFilter } from './errors/exception.filter.js'
import { LoggerSerivce } from './logger/logger.service.js'
import { UserController } from './users/users.controller.js'

export class App {
  app: Express
  server: Server
  port: number
  logger: LoggerSerivce
  userController: UserController
  exceptionFilter: ExceptionFilter


  constructor(
    logger: LoggerSerivce,
    userController: UserController,
    exceptionFilter: ExceptionFilter

  ) {
    this.app = express()
    this.port = 8000
    this.logger = logger
    this.userController = userController
    this.exceptionFilter = exceptionFilter
  }

  useRoutes() {
    this.app.use('/users', this.userController.router)
  }

  useExeptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
  }

  public async init() {
    this.useRoutes()
    this.useExeptionFilters()
    this.server = this.app.listen(this.port)
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
  }
}