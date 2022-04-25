import express from "express";
import { signupController } from "./controllers/signup";
import { signinController } from "./controllers/signin";
import { activateController } from "./controllers/activate";
import { routeWithErrorHanling } from "../../lib/routeWithErrorHanling";

const authRouter = express.Router();

authRouter.post("/signup", routeWithErrorHanling(signupController));

authRouter.post("/signin", routeWithErrorHanling(signinController));

authRouter.post(
    "/signout",
    routeWithErrorHanling(() => {})
);

authRouter.get("/activate/:id", routeWithErrorHanling(activateController));

authRouter.post(
    "/refresh",
    routeWithErrorHanling(() => {})
);

export { authRouter };
