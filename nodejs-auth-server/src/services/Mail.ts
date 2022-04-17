class MailService {
    async sendActivationMail(to: string, link: string) {
        console.info(`Отправляем письмо ${to} с ссылкой активации ${link}`);
    }
}

export const mailService = new MailService();
