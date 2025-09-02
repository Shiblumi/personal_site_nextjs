'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './Contact.module.css';
import Footer from '@/components/UI/Footer/Footer';
import PopupNotification from '@/components/UI/PopupNotification/PopupNotification';

export default function Contact() {
	const [senderEmail, setSenderEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupType, setPopupType] = useState('info');
	const [popupMessage, setPopupMessage] = useState('');

	const sendMail = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
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

			if (res.ok) {
				console.log(data);
				setPopupType('success');
				setPopupMessage('Email sent successfully!');
				setShowPopup(true);
				setSenderEmail('');
				setSubject('');
				setMessage('');
			} else {
				setPopupType('error');
				setPopupMessage(`Failed to send email. Code: ${res.status}`);
				setShowPopup(true);
				throw new Error(
					`Failed to send email: ${res.status} ${res.statusText}`
				);
			}
		} catch (error) {
			setPopupType('error');
			setPopupMessage('An error occurred. Please try again later.');
			setShowPopup(true);
		} finally {
			setIsLoading(false);
		}
	};

	// --------------- TEST --------------

	// const sendMail = async (e) => {
	// 	e.preventDefault();
	// 	setIsLoading(true);

	// 	try {
	// 		await new Promise((resolve) => {
	// 			setTimeout(() => {
	// 				resolve();
	// 			}, 2000);
	// 		});

	// 		// Simulate response
	// 		// throw new Error('Simulated failure');

	// 		setPopupType('success');
	// 		setPopupMessage('Email sent successfully!');
	// 		setShowPopup(true);
	// 		// setSenderEmail('');
	// 		// setSubject('');
	// 		// setMessage('');
	// 	} catch (error) {
	// 		console.error('Error sending email:', error.message);
	// 		setPopupType('error');
	// 		setPopupMessage('Email failed to send. Please try again later.');
	// 		setShowPopup(true);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	// --------------- END TEST --------------

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: false,
		amount: 0.75,
	});

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
				staggerChildren: 0.1,
			},
		},
	};

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
		hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
		visible: {
			opacity: 1,
			backdropFilter: 'blur(5px)',
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				delay: 1.1,
			},
		},
		tap: {
			scale: 0.98,
			transition: {
				duration: 0.1,
				ease: 'easeOut',
			},
		},
	};

	const spinnerVariants = {
		hidden: {
			opacity: 0,
			rotate: 0,
		},
		visible: {
			opacity: 1,
			rotate: 360,
			transition: {
				opacity: {
					duration: 0.2,
					ease: 'easeOut',
				},
				rotate: {
					repeat: Infinity,
					duration: 1,
					ease: 'linear',
					repeatType: 'loop',
				},
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
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					disabled={isLoading}
					whileTap='tap'
				>
					{isLoading ? (
						<motion.div
							className={styles['spinner']}
							variants={spinnerVariants}
							initial='hidden'
							animate='visible'
						/>
					) : (
						<motion.span>Send Message</motion.span>
					)}
				</motion.button>
			</motion.form>

			{/* Popup Notification */}
			<AnimatePresence>
				{showPopup && (
					<PopupNotification
						type={popupType}
						duration={6}
						onClose={() => setShowPopup(false)}
					>
						{popupMessage}
					</PopupNotification>
				)}
			</AnimatePresence>

			{/* Footer */}
			<Footer />
		</motion.div>
	);
}
