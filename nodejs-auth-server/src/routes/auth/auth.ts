import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";

const authRouter = express.Router();

authRouter.get("/signup", signupController);

authRouter.get("/signin", signinController);

export { authRouter };
