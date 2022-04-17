import { Controller } from "../../../types";
import { IUser } from "../../../services/User";

interface ISigninRequestBody extends Pick<IUser, "password" | "email"> {}
interface ISigninResponseBody {}

const signinController: Controller<ISigninRequestBody, ISigninResponseBody> = (req, res) => {
    res.json({});
};

export { signinController };
