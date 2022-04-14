import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";

const authRouter = express.Router();

authRouter.post("/auth/signup", signupController);

authRouter.post("/auth/signin", signinController);

export { authRouter };
