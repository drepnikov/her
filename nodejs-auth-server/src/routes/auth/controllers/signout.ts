import { IRegisterAndLoginResponse, IUser, userService } from "../../../services/User";
import { Controller } from "../../../types";
import { REFRESH_TOKEN_COOKIE_NAME } from "../../../constants";

interface ISignoutRequestBody extends Pick<IUser, "id"> {}
interface ISignoutResponseBody extends IRegisterAndLoginResponse {}

const signoutController: Controller<ISignoutRequestBody, ISignoutResponseBody> = async (req, res, next) => {
    const { id } = req.body;

    await userService.logout(id);

    res.clearCookie(REFRESH_TOKEN_COOKIE_NAME);

    return res.sendStatus(200);
};

export { signoutController };
