import { RequestHandler } from "express";

export type Controller<RequestBody = any, ResponseBody = any> = RequestHandler<
    any,
    ResponseBody | IErrorResponseBody,
    RequestBody
>;

export interface IErrorResponseBody {
    errorMessage: string;
}
