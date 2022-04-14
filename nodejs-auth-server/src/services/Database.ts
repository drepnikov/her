import db from "../db.json";
import { IDatabase } from "../types";
import * as fs from "fs";
import path from "path";

class Database {
    async getAllData(): Promise<IDatabase> {
        return db;
    }

    async updateAllData(data: IDatabase) {
        fs.writeFile(path.resolve("./src/db.json"), JSON.stringify(data, null, 4), (err) => {
            console.error("Ошибка при записи в БД", err);
        });
    }
}

export const database = new Database();
