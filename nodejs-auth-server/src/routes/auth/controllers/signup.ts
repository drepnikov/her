import { IUser, userService } from "../../../services/User";
import { Controller } from "../../../types";
import { mailService } from "../../../services/Mail";
import { CustomError } from "../../../lib/CustomError";

interface ISignupRequestBody extends Pick<IUser, "password" | "email"> {}
interface ISignupResponseBody extends IUser {}

const signupController: Controller<ISignupRequestBody, ISignupResponseBody> = async (req, res, next) => {
    const { email, password } = req.body;

    const invalidPassword = userService.isInvalidPassword(password);

    if (invalidPassword) {
        throw CustomError.BadRequest(invalidPassword);
    }

    const invalidUsername = userService.isInvalidEmail(email);

    if (invalidUsername) {
        throw CustomError.BadRequest(invalidUsername);
    }

    if (await userService.isExistByEmail(email)) {
        throw CustomError.BadRequest(`Пользователь с почтой ${email} уже существует`);
    }

    const newUser = await userService.create({ email, password });

    await mailService.sendActivationMail(newUser.email, newUser.id);

    res.cookie("refreshToken", newUser.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });

    return res.json(newUser);
};

export { signupController };
