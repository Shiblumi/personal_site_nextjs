import { motion } from 'motion/react';
import styles from './PopupLine.module.css';

const lineDirections = {
	up: { bottom: '50%' },
	down: { top: '50%' },
};

export default function PopupLine({
	positionLeft = { left: '0%' },
	lineDirection = 'up',
	textDirection = 'right',
	children = 'Nice weather we are having!',
	delay = '0.3s',
	isInView = false,
}) {
	const lineVariants = {
		hidden: {
			scaleY: 0,
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			scaleY: 1,
			transition: {
				duration: 1.0,
				delay: Number(delay),
				ease: 'easeOut',
			},
		},
	};

	const textVariants = {
		hidden: {
			opacity: 0,
			translateY: lineDirection === 'up' ? 20 : -20,
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			opacity: 1,
			translateY: 0,
			transition: {
				duration: 0.42,
				delay: Number(delay) + 0.6,
				ease: 'easeOut',
			},
		},
	};

	return (
		<motion.div
			className={`${styles['popup-line-container']}`}
			style={{ ...lineDirections[lineDirection], left: positionLeft }}
		>
			<motion.div
				className={`${styles['popup-line']} ${styles[lineDirection]}`}
				variants={lineVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				style={{
					originY: lineDirection === 'up' ? 1 : 0,
				}}
			/>

			<motion.div
				className={`${styles['text-container']} ${styles[lineDirection]} ${styles[textDirection]} glass-dark-soft`}
				variants={textVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
