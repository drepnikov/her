import express from "express";
import { database } from "../../services/Database";

const sensitiveDataRouter = express.Router();

sensitiveDataRouter.get("/get-db", async (req, res) => {
    const allData = await database.getAllData();

    res.json({
        msg: "Предоставляю тебе нашу базу данных",

        data: allData,
    });
});

sensitiveDataRouter.post("/reset-db", async (req, res) => {
    await database.resetDatabase();

    res.json({
        msg: "База данных очищена",
    });
});

export { sensitiveDataRouter };
