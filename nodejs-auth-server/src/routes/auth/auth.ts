import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";
import { activateController } from "./controllers/activate";
import { routeWithErrorHandling } from "../../lib/routeWithErrorHandling";
import { signoutController } from "./controllers/signout";

const authRouter = express.Router();

authRouter.post("/signup", routeWithErrorHandling(signupController));

authRouter.post("/signin", routeWithErrorHandling(signinController));

authRouter.post("/signout", routeWithErrorHandling(signoutController));

authRouter.get("/activate/:id", routeWithErrorHandling(activateController));

authRouter.post(
    "/refresh",
    routeWithErrorHandling(() => {})
);

export { authRouter };
