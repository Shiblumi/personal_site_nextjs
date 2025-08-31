'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from './PopupNotification.module.css';

const popupContainerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 }
};

const popupVariants = {
	hidden: {
		opacity: 0,
		y: -50,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
	},
	exit: {
		opacity: 0,
		y: -30,
		scale: 0.95,
	}
};

export default function PopupNotification({
	duration = 5,
	delay = 0,
	type = 'info', // 'info', 'success', 'error'
	children = 'This is a popup message.',
	onClose
}) {
	const [isVisible, setIsVisible] = useState(true);
	const [timerStarted, setTimerStarted] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		// Start message timer after animation delay completes.
		const timer = setTimeout(() => {
			setTimerStarted(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	const handleClose = () => {
		setIsVisible(false);
		// Call parent's onClose after animation completes.
		setTimeout(() => {
			onClose?.();
		}, 200);
	};

	const timerColor = {
		info: '#94c8ff',
		success: '#b2ffd8',
		error: '#ff9aba',
	}[type];

	const trailColor = {
		info: '#94c8ff49',
		success: '#b2ffd849',
		error: '#ff9aba49',
	}[type];

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={`${styles['popup-container']}`}
					variants={popupContainerVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					transition={{
						duration: 0.2,
						delay: delay,
						when: "beforeChildren"
					}}
				>
					<motion.div
						className={`${styles['popup']} ${styles[type]} glass-dark-soft-no-gradient`}
						variants={popupVariants}
						initial="hidden"
						animate="visible"
						exit={{
							opacity: 0,
							y: -30,
							scale: 0.95,
							transition: {
								type: 'spring',
								stiffness: 300,
								damping: 30,
								delay: 0
							}
						}}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 30,
							delay: delay
						}}
					>
						<div className={styles['content']}>
							<p className={styles['message']}>{children}</p>
							<CountdownCircleTimer
								isPlaying={timerStarted}
								size={25}
								strokeWidth={5}
								duration={duration}
								colors={[timerColor]}
								trailColor={[trailColor]}
								colorsTime={[duration]}
								onComplete={handleClose}
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}