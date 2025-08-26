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

	// Container animation variants
	const containerVariants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	};

	// Form animation variants
	const formVariants = {
		hidden: {
			opacity: 0,
			y: 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
				delayChildren: 0.2,
			},
		},
	};

	// Form group animation (for each label-input pair)
	const formGroupVariants = {
		hidden: {
			opacity: 1,
			scale: 0.98,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				staggerChildren: 0.1, // Small stagger within each field group
			},
		},
	};

	// Field title animation variants (no backdrop filter)
	const formTitleVariants = {
		hidden: {
			opacity: 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	// Field animation variants (with backdrop filter)
	const formFieldVariants = {
		hidden: {
			opacity: 0,
			scale: 0.98,
			backdropFilter: 'blur(0px)',
		},
		visible: {
			opacity: 1,
			scale: 1,
			backdropFilter: 'blur(5px)',
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	const formButtonVariants = {
		hidden: { opacity: 0, scale: 0.98, backdropFilter: 'blur(0px)' },
		visible: {
			opacity: 1,
			scale: 1,
			backdropFilter: 'blur(5px)',
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				delay: 1.1,
			},
		},
	};

	return (
		<motion.div
			ref={sectionRef}
			id='contact'
			className={styles['contact-page-container']}
			variants={containerVariants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
		>
			<motion.form
				className={`${styles['contact-form']}`}
				onSubmit={sendMail}
				variants={formVariants}
			>
				{/* Title */}
				<motion.div variants={formGroupVariants}>
					<h1 style={{ marginBottom: '12px' }}>Contact</h1>
				</motion.div>

				{/* Email Field Group */}
				<motion.div
					className={`${styles['titled-input-field']}`}
					variants={formGroupVariants}
				>
					<motion.label variants={formTitleVariants} htmlFor='email'>
						Email
					</motion.label>
					<motion.input
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
						variants={formFieldVariants}
						whileFocus={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					/>
				</motion.div>

				{/* Subject Field Group */}
				<motion.div
					className={`${styles['titled-input-field']}`}
					variants={formGroupVariants}
				>
					<motion.label variants={formTitleVariants} htmlFor='subject'>
						Subject
					</motion.label>
					<motion.input
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
						variants={formFieldVariants}
						whileFocus={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					/>
				</motion.div>

				{/* Message Field Group */}
				<motion.div
					className={`${styles['titled-input-field']}`}
					variants={formGroupVariants}
				>
					<motion.label variants={formTitleVariants} htmlFor='message'>
						Message
					</motion.label>
					<motion.textarea
						className={`glass-dark-soft-no-gradient`}
						name='message'
						id='message'
						required
						cols={10}
						rows={5}
						value={message}
						variants={formFieldVariants}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						placeholder=''
						whileFocus={{
							scale: 1.01,
							transition: { duration: 0.2 },
						}}
					></motion.textarea>
				</motion.div>

				{/* Submit Button */}
				<motion.button
					className={`${styles['submit-button']} glass-dark-primary`}
					type='submit'
					variants={formButtonVariants}
				>
					<motion.span>Send Message</motion.span>
				</motion.button>
			</motion.form>
			<Footer />
		</motion.div>
	);
}
