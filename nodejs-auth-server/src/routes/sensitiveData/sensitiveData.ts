import express from "express";
import { database } from "../../services/Database";

const sensitiveDataRouter = express.Router();

sensitiveDataRouter.get("/", async (req, res) => {
    const allData = await database.getAllData();

    res.json({
        msg: "Предоставляю тебе нашу базу данных",

        data: allData,
    });
});

export { sensitiveDataRouter };
