'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Contact.module.css';
import Footer from '@/components/UI/Footer/Footer';

export default function Contact() {
	const [senderEmail, setSenderEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendMail = async (e) => {
		e.preventDefault();
		const res = await fetch('/api/sendEmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				senderEmail: senderEmail,
				subject: subject,
				message: message,
			}),
		});
		const data = await res.json();
		console.log(data);
	};

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: false,
		amount: 0.75,
	});

	return (
		<div
			ref={sectionRef}
			id='contact'
			className={styles['contact-page-container']}
		>
			<form className={`${styles['contact-form']}`} onSubmit={sendMail}>
				<div>
					<h1 style={{ marginBottom: '12px' }}>Contact</h1>
				</div>

				{/* Email Field */}
				<div className={`${styles['titled-input-field']}`}>
					<label htmlFor='email'>Email</label>
					<input
						className={`glass-dark-soft-no-gradient`}
						name='email'
						id='email'
						type='email'
						required
						value={senderEmail}
						onChange={(e) => {
							setSenderEmail(e.target.value);
						}}
						placeholder=''
					/>
				</div>

				{/* Subject Field */}
				<div className={`${styles['titled-input-field']}`}>
					<label htmlFor='subject'>Subject</label>
					<input
						className={`glass-dark-soft-no-gradient`}
						name='subject'
						id='subject'
						type='text'
						required
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						placeholder=''
					/>
				</div>

				{/* Message Field */}
				<div className={`${styles['titled-input-field']}`}>
					<label htmlFor='message'>Message</label>
					<textarea
						className={`glass-dark-soft-no-gradient`}
						name='message'
						id='message'
						required
						cols={10}
						rows={5}
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						placeholder=''
					></textarea>
				</div>
				<button
					className={`${styles['submit-button']} glass-dark-primary`}
					type='submit'
				>
					<span>Send Message</span>
				</button>
			</form>
			<Footer />
		</div>
	);
}
