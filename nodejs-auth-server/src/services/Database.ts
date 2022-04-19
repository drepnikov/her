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
        return new Promise((resolve) => {
            fs.readFile(path.resolve("db.json"), "utf8", (err, data) => {
                resolve(JSON.parse(data));
            });
        });
    }

    async updateAllData(data: IDatabase) {
        fs.writeFile(path.resolve("db.json"), JSON.stringify(data, null, 4), (err) => {
            if (err) console.error("Ошибка при записи в БД", err);
        });
    }

    async resetDatabase() {
        await this.updateAllData({
            users: {},
            tokens: {},
            emails: {},
        });
    }
}

export const database = new Database();
