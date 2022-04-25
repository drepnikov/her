import { v4 } from "uuid";
import { database } from "./Database";
import bcrypt from "bcrypt";
import { IToken, tokenService } from "./Token";

export interface IUser {
    email: string;
    password: string;
    id: string;
    isActivated: boolean;
}

class UserService {
    private INVALID_PASSWORD_COMMON_MESSAGE = "Пароль должен быть не менее 6 символов";
    private INVALID_EMAIL_COMMON_MESSAGE = "Email должен быть не менее 4 символов";

    async create(user: Omit<IUser, "id" | "isActivated">): Promise<IUser & IToken> {
        const data = await database.getAllData();

        const hashedPassword = await bcrypt.hash(user.password, 3);
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

    async isExistByEmail(email: string): Promise<boolean> {
        const data = await database.getAllData();

        return email in data.emails;
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

        if (password.length < 6) return this.INVALID_PASSWORD_COMMON_MESSAGE;

        return "";
    }

    isInvalidEmail(email: any) {
        if (typeof email !== "string") return "Email должен быть строкой. Фронт, ты чего?";

        if (email.length < 4) return this.INVALID_EMAIL_COMMON_MESSAGE;

        return "";
    }
}

export const userService = new UserService();
