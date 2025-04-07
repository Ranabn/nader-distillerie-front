import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: subject || 'Nouveau message depuis le formulaire de contact',
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        const userCopyOptions = {
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Copie de votre message',
            text: `Bonjour ${name},\n\nMerci de nous avoir contactés. Voici une copie de votre message :\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userCopyOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi des emails :', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
