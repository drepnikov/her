import { NextFunction, Request, Response } from "express";

export type Controller<Body = any> = (req: Request<void, void, Body>, res: Response, next: NextFunction) => void;
