import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, message } = await req.json();

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.CONTACT_RECEIVER,
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: `
                New message from AutoBharat Contact Form:
                
                Name: ${firstName} ${lastName}
                Email: ${email}
                
                Message:
                ${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">New Contact Submission</h2>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <footer style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">
                        This email was sent from the AutoBharat website contact form.
                    </footer>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
