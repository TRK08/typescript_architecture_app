import { App } from './app';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerSerivce } from './logger/logger.service';
import { UserController } from './users/users.controller';

async function bootstrap() {
  const logger = new LoggerSerivce()
  const app = new App(logger,
    new UserController(logger),
    new ExceptionFilter(logger))
  await app.init()
}


bootstrap()