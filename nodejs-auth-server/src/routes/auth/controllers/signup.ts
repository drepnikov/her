import { Controller } from "../../../types";

const signupController: Controller = (req, res, next) => {
    res.send("Ну здравствуй :) Регистратыш");
};

export { signupController };
