import { motion } from 'framer-motion';
import styles from './TextBox.module.css';

export default function TextBox({
	width = 'auto',
	minWidth = '200px',
	maxWidth = '100%',
	opacity = 0,
	delay = '0.3',
	children,
}) {
	const variants = {
		hidden: { scale: 0.98, opacity: 0, transition: { duration: 0 } },
		visible: { scale: 1, opacity: 1 },
	};

	return (
		<motion.div
			className={`${styles['text-container']} glass-dark-soft-no-gradient`}
			initial='hidden'
			whileInView='visible'
			layout
			viewport={{
				once: false,
				amount: 0.2,
			}}
			variants={variants}
			transition={{
				duration: 0.8,
				delay: Number(delay),
				ease: 'easeOut',
				layout: {
					type: 'spring',
					stiffness: 300,
					damping: 30,
					mass: 1,
				},
			}}
			style={{
				width: width,
				maxWidth: maxWidth,
				minWidth: minWidth,
				backgroundColor: `rgba(var(--bg-dark-rgb), ${opacity})`,
			}}
		>
			{children}
		</motion.div>
	);
}
