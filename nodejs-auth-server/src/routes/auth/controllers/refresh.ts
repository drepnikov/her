import { Controller } from "../../../types";
import { IRegisterAndLoginResponse, userService } from "../../../services/User";

interface IRefreshTokenRequestBody {}

interface IRefreshTokenResponseBody extends IRegisterAndLoginResponse {}

const refreshTokenController: Controller<IRefreshTokenRequestBody, IRefreshTokenResponseBody> = async (
    req,
    res,
    next
) => {
    const { refreshToken } = req.cookies;

    const result = await userService.refreshSession(refreshToken);

    res.json(result);
};

export { refreshTokenController };
