require("dotenv").config();
import express from "express";
import { authRouter } from "./routes/auth/auth";
import bodyParser from "body-parser";
import { sensitiveDataRouter } from "./routes/sensitiveData/sensitiveData";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(authRouter);
app.use(sensitiveDataRouter);

app.listen(port, () => {
    console.log("Сервер запущен");
});
