import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";

const authRouter = express.Router();

authRouter.post("/auth/signup", signupController);

authRouter.post("/auth/signin", signinController);

authRouter.post("/auth/signout", () => {});

authRouter.post("/auth/activate/:link", () => {});

authRouter.post("/auth/refresh", () => {});

export { authRouter };
