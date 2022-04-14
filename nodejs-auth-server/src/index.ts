import express from "express";
import { authRouter } from "./routes/auth/auth";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(authRouter);

app.listen(port, () => {
    console.log("Сервер запущен");
});
