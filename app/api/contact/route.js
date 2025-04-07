import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Name, email and message are required'
                }),
                { status: 400 }
            );
        }

        // Check if environment variables are defined
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
            console.error('Missing required environment variables for email configuration');
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Server configuration error'
                }),
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Test the connection
        await transporter.verify().catch(error => {
            console.error('SMTP Connection Error:', error);
            throw new Error('Failed to connect to mail server');
        });

        const mailOptions = {
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: subject || 'New message from contact form',
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message.replace(/\n/g, '<br>')}</p>`
        };

        const userCopyOptions = {
            from: `"Nader Distilleries" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Copy of your message',
            text: `Hello ${name},\n\nThank you for contacting us. Here is a copy of your message:\n\n${message}`,
            html: `<p>Hello ${name},</p>
                  <p>Thank you for contacting us. Here is a copy of your message:</p>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                  <p>We will get back to you as soon as possible.</p>
                  <p>Best regards,<br>Nader Distilleries</p>`
        };

        // Send the emails one after another
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userCopyOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending emails:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: error.message || 'Failed to send email'
            }),
            { status: 500 }
        );
    }
}