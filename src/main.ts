import { App } from './app';
import { LoggerSerivce } from './logger/logger.service';
import { UserController } from './users/users.controller';

async function bootstrap() {
  const logger = new LoggerSerivce()
  const app = new App(logger, new UserController(logger))
  await app.init()
}


bootstrap()