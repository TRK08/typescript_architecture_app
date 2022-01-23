import { NextFunction, Request, Response } from 'express';

export interface IUserController {
	login: (req: Request, res: Response, next: NextFunction) => void;
	registr: (req: Request, res: Response, next: NextFunction) => void;
}
