import { IUser, userService } from "../../../services/User";
import { Controller } from "../../../types";

interface ISignupRequestBody extends Pick<IUser, "password" | "email"> {}
interface ISignupResponseBody extends IUser {}

const signupController: Controller<ISignupRequestBody, ISignupResponseBody> = async (req, res) => {
    const { email, password } = req.body;

    const invalidPassword = userService.isInvalidPassword(password);

    if (invalidPassword) {
        res.status(406);
        return res.json({ errorMessage: invalidPassword });
    }

    const invalidUsername = userService.isInvalidEmail(email);

    if (invalidUsername) {
        res.status(406);
        return res.json({ errorMessage: invalidUsername });
    }

    if (await userService.isExist(email)) {
        res.status(406);
        return res.json({ errorMessage: `Пользователь с почтой ${email} уже существует` });
    }

    const newUser = await userService.create({ email, password });

    return res.json(newUser);
};

export { signupController };
