import express from "express";
import { database } from "../../services/Database";
import { routeWithErrorHanling } from "../../lib/routeWithErrorHanling";

const sensitiveDataRouter = express.Router();

sensitiveDataRouter.get(
    "/get-db",
    routeWithErrorHanling(async (req, res) => {
        const allData = await database.getAllData();

        res.json({
            msg: "Предоставляю тебе нашу базу данных",

            data: allData,
        });
    })
);

sensitiveDataRouter.post(
    "/reset-db",
    routeWithErrorHanling(async (req, res) => {
        await database.resetDatabase();

        res.json({
            msg: "База данных очищена",
        });
    })
);

export { sensitiveDataRouter };
