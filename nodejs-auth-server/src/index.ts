require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth/auth";
import { sensitiveDataRouter } from "./routes/sensitiveData/sensitiveData";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", sensitiveDataRouter);
app.use("/auth", authRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Сервер запущен");
});
