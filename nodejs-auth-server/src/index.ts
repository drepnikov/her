import express from "express";
import { authRouter } from "./routes/auth/auth";

const app = express();
const port = 3000;

app.use(authRouter);

app.listen(port, () => {
    console.log("Сервер запущен");
});
