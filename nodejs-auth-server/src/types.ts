import { RequestHandler } from "express";

export type Controller<RequestBody = any, ResponseBody = any, Params = any> = RequestHandler<
    Params,
    ResponseBody | IErrorResponseBody,
    RequestBody
>;

export interface IErrorResponseBody {
    errorMessage: string;
}
