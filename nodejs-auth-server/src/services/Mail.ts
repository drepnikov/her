import nodemailer, { Transporter } from "nodemailer";

class MailService {
    transporter: Transporter;

    constructor() {
        console.log(process.env.SMTP_HOST, process.env.SMTP_PORT, process.env.SMTP_USER, process.env.SMTP_PASSWORD);

        this.transporter = nodemailer.createTransport({
            //@ts-ignore
            host: "smtp.gmail.com",
            port: 587,
            secure: false,

            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    async sendActivationMail(to: string, id: string) {
        const link = `${process.env.API_URL}/auth/activate/${id}`;

        console.info(`Отправляем письмо ${to} с ссылкой активации ${link}`);

        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Активация аккаунта на ${process.env.API_URL}`,
            text: "",
            html: `
                <div>
                    <h1>Активируйте аккаунт перейдя по ссылке:</h1>
                    <a href="${link}">${link}</a>
                </div>
            `,
        });
    }
}

export const mailService = new MailService();
