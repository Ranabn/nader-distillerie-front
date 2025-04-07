// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Créez le transporteur pour envoyer l'email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true pour le port 465, false pour d'autres ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email envoyé à l'adresse de contact
        const mailOptions = {
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL, // adresse de réception principale
            subject: subject || 'Nouveau message depuis le formulaire de contact',
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // Email de confirmation envoyé à l'utilisateur
        const userCopyOptions = {
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: email, // copie à l'expéditeur
            subject: 'Copie de votre message',
            text: `Bonjour ${name},\n\nMerci de nous avoir contactés. Voici une copie de votre message :\n\n${message}`,
        };

        // Envoyer les deux emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userCopyOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi des emails :', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
