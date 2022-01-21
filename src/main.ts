import { App } from './app';
import { LoggerSerivce } from './logger/logger.service';

async function bootstrap() {
  const app = new App(new LoggerSerivce())
  await app.init()
}


bootstrap()