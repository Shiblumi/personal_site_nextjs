/*
    NOTE: THIS FILE HANDLES EMAIL SENDING WITH RATE LIMITING USING REDIS.
    NOT USED AT THE MOMENT BUT IMPLEMENTED FOR FUTURE USE.
 */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from 'redis';

const LIMIT = 2;
const WINDOW = 180;
const isDev = process.env.NODE_ENV === 'development';

async function getRedisClient() {
	if (global.redisClient && global.redisClient.isOpen) {
		return global.redisClient;
	}
	const client = createClient({
		url: process.env.REDIS_URL,
		// socket: {
		//   tls: true,
		//   rejectUnauthorized: !isDev,
		// }
	});
	client.on('error', (err) => console.error('Redis Client Error:', err));

	await client.connect();
	global.redisClient = client;
	return client;
}

export async function POST(request) {
	try {
		const redis = await getRedisClient();

		const ip = request.headers.get('x-forwarded-for') || 'unknown';
		const key = `email-rate:${ip}`;

		const count = await redis.incr(key);
		if (count === 1) {
			await redis.expire(key, WINDOW);
		}
		if (count > LIMIT) {
			return NextResponse.json(
				{ message: 'Too many requests. Try later.' },
				{ status: 429 }
			);
		}

		const { senderEmail, subject, message } = await request.json();

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS: true,
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
			html: `<li>From: ${senderEmail}</li><li>Subject: ${subject}</li><li>Message: ${message}</li>`,
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
