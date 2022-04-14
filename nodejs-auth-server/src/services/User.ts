import { v4 } from "uuid";
import { database } from "./Database";

export interface IUser {
    username: string;
    password: string;
    id: string;
}

class UserService {
    private INVALID_PASSWORD_COMMON_MESSAGE = "Пароль должен быть не менее 6 символов";
    private INVALID_USERNAME_COMMON_MESSAGE = "Имя пользователя должно быть не менее 4 символов";

    async create(user: Omit<IUser, "id">): Promise<IUser> {
        const data = await database.getAllData();

        const newUser: IUser = {
            ...user,
            id: v4(),
        };

        data.users[newUser.username] = newUser;

        await database.updateAllData(data);

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

    isInvalidUsername(username: any) {
        if (typeof username !== "string") return "Логин должен быть строкой. Фронт, ты чего?";

        if (username.length < 4) return this.INVALID_USERNAME_COMMON_MESSAGE;

        return "";
    }
}

export const userService = new UserService();
