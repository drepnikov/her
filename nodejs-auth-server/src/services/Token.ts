import jwt from "jsonwebtoken";
import { database } from "./Database";
import { IUser } from "./User";
import { CustomError } from "../lib/CustomError";

export interface IToken {
    accessToken: string;
    refreshToken: string;
}

class TokenService {
    generateTokens(payload: Pick<IUser, "id" | "email" | "isActivated">): IToken {
        if (!process.env.JWT_ACCESS_TEST_SECRET_KEY || !process.env.JWT_REFRESH_TEST_SECRET_KEY) {
            throw new Error("Внутренняя ошибка! Секретные ключи для генерации токенов не указаны");
        }

        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TEST_SECRET_KEY, { expiresIn: "15m" });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TEST_SECRET_KEY, { expiresIn: "30d" });

        return {
            accessToken,
            refreshToken,
        };
    }

    async saveRefreshToken(userId: string, refreshToken: string) {
        const data = await database.getAllData();

        data.tokens[userId] = { refreshToken };

        database.updateAllData(data);

        //todo: нах?
        return refreshToken;
    }

    async deleteRefreshToken(userId: string) {
        const data = await database.getAllData();

        if (!(userId in data.tokens)) throw CustomError.BadRequest(`Не найдены сессии для ${userId}`);

        delete data.tokens[userId];

        database.updateAllData(data);
    }
}

export const tokenService = new TokenService();
