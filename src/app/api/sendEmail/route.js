import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const isDev = process.env.NODE_ENV === 'development';

export async function POST(request) {
	try {
		const { senderEmail, subject, message } = await request.json();

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS: !isDev,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
			tls: {
				rejectUnauthorized: !isDev,
			},
		});

		const mailOption = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			replyTo: senderEmail,
			subject: `✨diwi.dev: Email from ${senderEmail}`,
			html: `
				<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
					<p><strong>From:</strong> ${senderEmail}</p>
					<p><strong>Subject:</strong> ${subject}</p>
					<p><strong>Message:</strong></p>
					<div style="margin-left: 20px; margin-top: 10px;">
						${message}
					</div>
				</div>
			`,
		};

		await transporter.sendMail(mailOption);

		return NextResponse.json(
			{ message: 'Email Sent Successfully' },
			{ status: 200 }
		);
	} catch (err) {
		console.error('Handler error:', err);
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		);
	}
}
