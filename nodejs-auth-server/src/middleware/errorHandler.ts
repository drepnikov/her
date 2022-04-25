import { Response, Request } from "express";
import { CustomError } from "../lib/CustomError";

const errorHandler = function (err: any, req: Request, res: Response, next: any) {
    console.error(err);

    if (err instanceof CustomError) {
        return res.status(err.status).json({ errorMessage: err.message });
    }

    res.status(502).json({ errorMessage: "Неизвестная ошибка" });
};

export { errorHandler };
