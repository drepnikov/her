import db from "../db.json";
import * as fs from "fs";
import path from "path";
import { IUser } from "./User";
import { IToken } from "./Token";

export interface IDatabase {
    users: {
        // "user-id": IUser
        [key: string]: IUser;
    };

    emails: {
        // "abc@dfg.com": "user-id"
        [key: string]: string;
    };

    tokens: {
        // "user-id": IToken
        [key: string]: Omit<IToken, "accessToken">;
    };
}

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
