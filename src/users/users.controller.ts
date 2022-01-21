import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerSerivce } from "../logger/logger.service";

export class UserController extends BaseController {
  constructor(
    logger: LoggerSerivce
  ) {
    super(logger)
    this.bindRoutes([
      { path: '/registr', method: 'post', func: this.registr },
      { path: '/login', method: 'post', func: this.login },
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'login')
  }

  registr(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'registr')
  }
}