class CustomError extends Error {
    constructor(message: string, public status: number) {
        super(message);
    }

    static BadRequest(message: string) {
        return new CustomError(message, 400);
    }

    static Unauthorized() {
        return new CustomError("Пользователь не авторизован", 401);
    }
}

export { CustomError };
