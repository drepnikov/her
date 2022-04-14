import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";

const authRouter = express.Router();

authRouter.post("/signup", signupController);

authRouter.post("/signin", signinController);

export { authRouter };
