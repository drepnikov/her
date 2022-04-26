import { v4 } from "uuid";
import { database } from "./Database";
import bcrypt from "bcrypt";
import { IToken, tokenService } from "./Token";
import { CustomError } from "../lib/CustomError";

export interface IUser {
    email: string;
    password: string;
    id: string;
    isActivated: boolean;
}

export type IRegisterAndLoginResponse = IUser & IToken;

class UserService {
    static INVALID_PASSWORD_COMMON_MESSAGE = "Пароль должен быть не менее 6 символов";
    static INVALID_EMAIL_COMMON_MESSAGE = "Email должен быть не менее 4 символов";

    static getHashedPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 3);
    }

    async logout(userId: string) {
        return tokenService.deleteRefreshToken(userId);
    }

    async login(user: IUser, password: string): Promise<IRegisterAndLoginResponse> {
        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!isPassEquals) throw CustomError.BadRequest("Не верный пароль");

        const tokens = tokenService.generateTokens({
            email: user.email,
            isActivated: user.isActivated,
            id: user.id,
        });

        await tokenService.saveRefreshToken(user.id, tokens.refreshToken);

        return { ...user, ...tokens };
    }

    async register(user: Omit<IUser, "id" | "isActivated">): Promise<IRegisterAndLoginResponse> {
        const data = await database.getAllData();

        const hashedPassword = await UserService.getHashedPassword(user.password);
        const uniqueId = v4();

        const newUser: IUser = {
            ...user,

            password: hashedPassword,
            id: uniqueId,
            isActivated: false,
        };

        data.users[newUser.id] = newUser;
        data.emails[newUser.email] = newUser.id;

        await database.updateAllData(data);

        const tokens = tokenService.generateTokens({
            email: newUser.email,
            isActivated: newUser.isActivated,
            id: newUser.id,
        });

        await tokenService.saveRefreshToken(newUser.id, tokens.refreshToken);

        return { ...newUser, ...tokens };
    }

    async findByEmail(email: string): Promise<string> {
        const data = await database.getAllData();

        return data.emails[email];
    }

    async getUserById(id: string): Promise<IUser | undefined> {
        const data = await database.getAllData();

        return data.users[id];
    }

    async updateUser(user: IUser): Promise<boolean> {
        const data = await database.getAllData();

        data.users[user.id] = user;

        await database.updateAllData(data);

        return true;
    }

    isInvalidPassword(password: any) {
        if (typeof password !== "string") return "Пароль должен быть строкой. Фронт, ты чего?";

        if (password.length < 6) throw CustomError.BadRequest(UserService.INVALID_PASSWORD_COMMON_MESSAGE);
    }

    isInvalidEmail(email: any) {
        if (typeof email !== "string") return "Email должен быть строкой. Фронт, ты чего?";

        if (email.length < 4) throw CustomError.BadRequest(UserService.INVALID_EMAIL_COMMON_MESSAGE);

        return "";
    }
}

export const userService = new UserService();
