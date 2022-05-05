import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";
import { activateController } from "./controllers/activate";
import { routeWithErrorHandling } from "../../lib/routeWithErrorHandling";
import { signoutController } from "./controllers/signout";
import { refreshTokenController } from "./controllers/refresh";

const authRouter = express.Router();

authRouter.post("/signup", routeWithErrorHandling(signupController));

authRouter.post("/signin", routeWithErrorHandling(signinController));

authRouter.post("/signout", routeWithErrorHandling(signoutController));

authRouter.post("/refresh-token", routeWithErrorHandling(refreshTokenController));

authRouter.get("/activate/:id", routeWithErrorHandling(activateController));

export { authRouter };
