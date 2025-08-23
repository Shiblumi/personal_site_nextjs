'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Contact.module.css';

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
			<form onSubmit={sendMail}>
				<div>
					<h1>Contact</h1>
				</div>

                {/* Email Field */}
				<div>
					<label htmlFor='email'>Email</label>
					<input
						name='email'
						id='email'
						type='email'
						required
						value={senderEmail}
						onChange={(e) => {
							setSenderEmail(e.target.value);
						}}
						placeholder='you@example.com'
					/>
				</div>

				{/* Subject Field */}
				<div>
					<label htmlFor='subject'>Subject</label>
					<input
						name='subject'
						id='subject'
						type='text'
						required
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						placeholder='awww yeeee'
					/>
				</div>

				{/* Message Field */}
				<div>
					<label htmlFor='message'>What would you need help with?</label>
					<textarea
						name='message'
						id='message'
						required
						cols={10}
						rows={5}
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						placeholder='Whatup dog it is ya boi, dirkinson. We out here trying out the Costco samples.'
					/>
				</div>
				<button type='submit' style={{outline: 'solid 1px yellowgreen'}}>
					<span>Send Message</span>
				</button>
			</form>
		</div>
	);
}
