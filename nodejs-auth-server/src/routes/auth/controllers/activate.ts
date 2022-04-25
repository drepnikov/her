import { Controller } from "../../../types";
import { userService } from "../../../services/User";
import { CustomError } from "../../../lib/CustomError";

interface IActivateParams {
    id: string;
}

const activateController: Controller<void, void, IActivateParams> = async (req, res, next) => {
    const { id } = req.params;

    const user = await userService.getUserById(id);

    if (!user) {
        throw CustomError.BadRequest("Не найден пользователь");
    }

    if (user.isActivated) {
        throw CustomError.BadRequest("Пользователь уже активирован");
    }

    user.isActivated = true;

    await userService.updateUser(user);

    res.redirect(process.env.CLIENT_URL || "");
};

export { activateController };
