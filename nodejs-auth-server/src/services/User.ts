import { v4 } from "uuid";
import { database } from "./Database";
import bcrypt from "bcrypt";
import { mailService } from "./Mail";

export interface IUser {
    email: string;
    password: string;
    id: string;
    activationLink: string;
}

class UserService {
    private INVALID_PASSWORD_COMMON_MESSAGE = "Пароль должен быть не менее 6 символов";
    private INVALID_EMAIL_COMMON_MESSAGE = "Email должен быть не менее 4 символов";

    async create(user: Omit<IUser, "id" | "activationLink">): Promise<IUser> {
        const data = await database.getAllData();

        const hashedPassword = await bcrypt.hash(user.password, 3);
        const uniqueId = v4();

        const newUser: IUser = {
            ...user,

            password: hashedPassword,
            id: uniqueId,
            activationLink: uniqueId,
        };

        data.users[newUser.email] = newUser;

        await database.updateAllData(data);

        await mailService.sendActivationMail(newUser.email, newUser.activationLink);

        return newUser;
    }

    async isExist(username: string): Promise<boolean> {
        const data = await database.getAllData();

        return username in data.users;
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
