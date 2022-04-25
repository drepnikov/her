import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";
import { activateController } from "./controllers/activate";
import { routeWithErrorHandling } from "../../lib/routeWithErrorHandling";

const authRouter = express.Router();

authRouter.post("/signup", routeWithErrorHandling(signupController));

authRouter.post("/signin", routeWithErrorHandling(signinController));

authRouter.post(
    "/signout",
    routeWithErrorHandling(() => {})
);

authRouter.get("/activate/:id", routeWithErrorHandling(activateController));

authRouter.post(
    "/refresh",
    routeWithErrorHandling(() => {})
);

export { authRouter };
