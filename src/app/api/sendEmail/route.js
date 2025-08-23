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
			subject: `diwi.dev: Email from ${senderEmail}`,
			html: `<li>From: ${senderEmail}</li>
            <li>Subject: ${subject}</li>
            <li>Message: ${message}</li>`,
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
