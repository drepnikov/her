import { Controller } from "../types";

const routeWithErrorHandling = (callback: Controller) => {
    const route: Controller = async (req, res, next) => {
        try {
            await callback(req, res, next);
        } catch (e) {
            next(e);
        }
    };

    return route;
};

export { routeWithErrorHandling };
