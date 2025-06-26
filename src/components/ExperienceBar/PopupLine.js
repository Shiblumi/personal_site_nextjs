import { motion } from 'motion/react';
import styles from './PopupLine.module.css';

const lineDirections = {
	up: { bottom: '50%' },
	down: { top: '50%' },
};

export default function PopupLine({
	isVisible = true,
	positionLeft = { left: '0%' },
	lineDirection = 'up',
	textDirection = 'right',
	children = 'Nice weather we are having!',
	delay = '0.3s',
}) {
	return (
		<motion.div
			className={`${styles['popup-line-container']}`}
			style={{ ...lineDirections[lineDirection], left: positionLeft }}
		>
			<motion.div
				className={`${styles['popup-line']} ${styles[lineDirection]}`}
			/>
			<motion.div
				className={`${styles['text-container']} ${styles[lineDirection]} ${styles[textDirection]} glass-dark-soft`}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
