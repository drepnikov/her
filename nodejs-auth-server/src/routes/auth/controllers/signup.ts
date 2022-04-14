import { Controller } from "../../../types";

interface ISignupControllerBody {
    login: string;
    password: string;
}

const signupController: Controller<ISignupControllerBody> = (req, res) => {
    const { login, password } = req.body;

    console.log(`Наш логин - ${login}, наш пароль - ${password}`);

    res.send("Ну здравствуй :) Регистратыш");
};

export { signupController };
