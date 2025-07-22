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
				initial={{ scaleY: 0 }}
				animate={{ scaleY: isVisible ? 1 : 0 }}
				transition={{
					duration: isVisible ? 1.0 : 0,
					delay: isVisible ? delay : 0,
					ease: 'easeOut',
				}}
				style={{
					originY: lineDirection === 'up' ? 1 : 0,
				}}
			/>

			<motion.div
				className={`${styles['text-container']} ${styles[lineDirection]} ${styles[textDirection]} glass-dark-soft`}
				initial={{ opacity: 0, y: 20 }}
				animate={
					isVisible
						? { opacity: 1, y: 0 }
						: { opacity: 0, y: lineDirection === 'up' ? 20 : -20 }
				}
				transition={{
					duration: isVisible ? 0.42 : 0,
					delay: isVisible ? Number(delay) + 0.6 : 0,
					ease: 'easeOut',
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
