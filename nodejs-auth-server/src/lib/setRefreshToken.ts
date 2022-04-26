import { Response } from "express";
import { REFRESH_TOKEN_COOKIE_NAME } from "../constants";

const setRefreshTokenCookie = (res: Response, refreshToken: string) => {
    res.cookie(REFRESH_TOKEN_COOKIE_NAME, refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
};

export { setRefreshTokenCookie };
