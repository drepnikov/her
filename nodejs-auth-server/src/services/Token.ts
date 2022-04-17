import jwt from "jsonwebtoken";

export interface IToken {
    user: string;
    refreshToken: string;
}

class TokenService {
    generateTokens(payload: any) {
        if (!process.env.JWT_ACCESS_TEST_SECRET_KEY || !process.env.JWT_REFRESH_TEST_SECRET_KEY) {
            throw new Error("Внутренняя ошибка. Секретные ключи для генерации токенов не указаны");
        }

        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TEST_SECRET_KEY, { expiresIn: "15m" });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TEST_SECRET_KEY, { expiresIn: "30d" });

        return {
            accessToken,
            refreshToken,
        };
    }
}

export const tokenService = new TokenService();
