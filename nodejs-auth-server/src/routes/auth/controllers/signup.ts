import { IUser, userService } from "../../../services/User";
import { Controller } from "../../../types";

interface ISignupRequestBody extends Pick<IUser, "password" | "username"> {}
interface ISignupResponseBody extends IUser {}

const signupController: Controller<ISignupRequestBody, ISignupResponseBody> = async (req, res) => {
    const { username, password } = req.body;

    const invalidPassword = userService.isInvalidPassword(password);

    if (invalidPassword) {
        res.status(406);
        return res.json({ errorMessage: invalidPassword });
    }

    const invalidUsername = userService.isInvalidUsername(username);

    if (invalidUsername) {
        res.status(406);
        return res.json({ errorMessage: invalidUsername });
    }

    if (await userService.isExist(username)) {
        res.status(406);
        return res.json({ errorMessage: "Пользователь с таким именем существует" });
    }

    const newUser = await userService.create({ username, password });

    return res.json(newUser);
};

export { signupController };
