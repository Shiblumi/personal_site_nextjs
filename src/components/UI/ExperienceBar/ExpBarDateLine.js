import { motion } from 'motion/react';

export default function DateLine({ positionLeft, delay, date = '2049' }) {
	const dateLineVariants = {
		hidden: { opacity: 0, scale: 0.9, height: 0, transition: { duration: 0 } },
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
		hidden: { opacity: 0, transition: { duration: 0 } },
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
				whileInView='visible'
				viewport={{
					once: false,
					amount: 0.5,
				}}
			/>

			<motion.span
				style={{
					position: 'absolute',
					bottom: '50px',
					left: `calc(${positionLeft} - 18px)`,
					zIndex: 1,
					fontWeight: '600',
					color: 'rgba(var(--secondary-rgb), 0.9)',
				}}
				variants={dateTextVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: false,
					amount: 0.5,
				}}
			>
				{date}
			</motion.span>
		</>
	);
}
