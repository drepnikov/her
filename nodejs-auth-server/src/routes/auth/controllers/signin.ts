import { Controller } from "../../../types";
import { IRegisterAndLoginResponse, IUser, userService } from "../../../services/User";
import { CustomError } from "../../../lib/CustomError";
import { setRefreshTokenCookie } from "../../../lib/setRefreshToken";

interface ISigninRequestBody extends Pick<IUser, "password" | "email"> {}
interface ISigninResponseBody extends IRegisterAndLoginResponse {}

const signinController: Controller<ISigninRequestBody, ISigninResponseBody> = async (req, res, next) => {
    const { email, password } = req.body;

    const id = await userService.findByEmail(email);

    if (!id) throw CustomError.BadRequest(`Пользователь с почтой ${email} не зарегистрирован`);

    const user = await userService.getUserById(id);

    if (!user) throw CustomError.BadRequest(`Не смогли найти юзера ${id}`);

    const loggedUser = await userService.login(user, password);

    setRefreshTokenCookie(res, loggedUser.refreshToken);

    res.json(loggedUser);
};

export { signinController };
