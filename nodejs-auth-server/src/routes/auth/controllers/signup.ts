import { IRegisterAndLoginResponse, IUser, userService } from "../../../services/User";
import { Controller } from "../../../types";
import { mailService } from "../../../services/Mail";
import { CustomError } from "../../../lib/CustomError";

interface ISignupRequestBody extends Pick<IUser, "password" | "email"> {}
interface ISignupResponseBody extends IRegisterAndLoginResponse {}

const signupController: Controller<ISignupRequestBody, ISignupResponseBody> = async (req, res, next) => {
    const { email, password } = req.body;

    userService.isInvalidPassword(password);

    userService.isInvalidEmail(email);

    if (await userService.findByEmail(email))
        throw CustomError.BadRequest(`Пользователь с почтой ${email} уже существует`);

    const newUser = await userService.register({ email, password });

    await mailService.sendActivationMail(newUser.email, newUser.id);

    res.cookie("refreshToken", newUser.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });

    return res.json(newUser);
};

export { signupController };
