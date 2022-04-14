import { RequestHandler } from "express";
import { IUser } from "./services/User";

export type Controller<RequestBody = any, ResponseBody = any> = RequestHandler<
    any,
    ResponseBody | IErrorResponseBody,
    RequestBody
>;

export interface IDatabase {
    users: {
        [key: string]: IUser;
    };
}

export interface IErrorResponseBody {
    errorMessage: string;
}
