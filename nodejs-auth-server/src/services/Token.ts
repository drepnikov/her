import jwt from "jsonwebtoken";

export interface IToken {
    user: string;
    refreshToken: string;
}

class TokenService {
    generateTokens(payload: any) {}
}

export const tokenService = new TokenService();
