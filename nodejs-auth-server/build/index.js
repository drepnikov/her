"use strict";
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello worldss");
});
app.listen(port, () => {
    console.log("Сервер запущен");
});
//# sourceMappingURL=index.js.map