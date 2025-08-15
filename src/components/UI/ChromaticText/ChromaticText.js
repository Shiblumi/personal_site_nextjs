'use client';

import { motion } from 'framer-motion';
import styles from './ChromaticText.module.css';

export default function ChromaticText({
	children,
	className = '',
	isActive = false,
}) {
	const redVariants = {
		initial: { x: -2, y: -2, opacity: 0.2 },
		hover: {
			x: -3,
			y: -3,
			opacity: 0.4,
			transition: { duration: 0.15, ease: 'easeOut' },
		},
		active: {
			x: -6,
			y: -6,
			opacity: 0.4,
			transition: { duration: 0.1, ease: 'easeOut' },
		},
	};

	const blueVariants = {
		initial: {
			x: 2,
			y: 2,
			opacity: 0.2,
		},
		hover: {
			x: 3,
			y: 3,
			opacity: 0.4,
			transition: { duration: 0.15, ease: 'easeOut' },
		},
		active: {
			x: 6,
			y: 6,
			opacity: 0.4,
			transition: { duration: 0.2, ease: 'easeOut' },
		},
	};

	const whiteVariants = {
		initial: { x: 0, y: 0 },
		hover: {
			x: 0,
			y: 0,
		},
		active: {
			x: 0,
			y: 0,
		},
	};

	return (
		<motion.div
			className={`${styles['chromatic-container']} ${className}`}
			initial='initial'
			whileHover={isActive ? 'active' : 'hover'}
			animate={isActive ? 'active' : 'initial'}
			style={{ padding: '5px 10px' }}
		>
			{/* Blue layer (bottom/back) */}
			<motion.span
				className={`${styles['chromatic-layer']} ${styles['blue-layer']}`}
				variants={blueVariants}
			>
				{children}
			</motion.span>

			{/* White layer (middle/main) */}
			<motion.span
				className={`${styles['chromatic-layer']} ${styles['white-layer']} ${
					isActive ? styles.active : ''
				}`}
				variants={whiteVariants}
			>
				{children}
			</motion.span>

			{/* Red layer (top/front) */}
			<motion.span
				className={`${styles['chromatic-layer']} ${styles['red-layer']}`}
				variants={redVariants}
			>
				{children}
			</motion.span>
		</motion.div>
	);
}
