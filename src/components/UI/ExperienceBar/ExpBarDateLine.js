import { motion } from 'motion/react';

export default function DateLine({ positionLeft, delay, date = '2049', isInView = false }) {
	const dateLineVariants = {
		hidden: { opacity: 0, scale: 0.9, height: 0, transition: { duration: 0.2 } },
		visible: {
			opacity: 1,
			scale: 1,
			height: 28,
			transition: {
				duration: 0.3,
				delay: delay,
				ease: 'easeOut',
			},
		},
	};

	const dateTextVariants = {
		hidden: { opacity: 0, transition: { duration: 0.2 } },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: Number(delay) + 0.1,
				ease: 'easeOut',
			},
		},
	};

	return (
		<>
			<motion.div
				style={{
					position: 'absolute',
					left: positionLeft,
					width: '2px',
					height: '28px',
					borderRadius: '3px',
					background: 'rgba(148, 200, 255, 1)',
					filter: 'blur(1px)',
				}}
				variants={dateLineVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
			/>

			<motion.span
				style={{
					position: 'absolute',
					// bottom: 'clamp(40px, 8vh, 80px)',
					transform: 'translateY(clamp(-24px, -10vh, -43px)) translateX(-50%)',
					left: positionLeft,
					zIndex: 1,
					fontSize: 'clamp(0.7em, 1.1vw, 0.9em)',
					fontWeight: '600',
					color: 'rgba(var(--secondary-rgb), 0.9)',
					textAlign: 'center',
				}}
				variants={dateTextVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
			>
				{date}
			</motion.span>
		</>
	);
}
