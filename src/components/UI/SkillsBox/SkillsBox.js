import styles from './SkillsBox.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SkillBox({ title, logos = [], delay = '0.2' }) {
	const skillBoxVariants = {
		hidden: { opacity: 0, scale: 0.9, transition: { duration: 0 } },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				ease: 'easeOut',
				staggerChildren: 0.11,
				delayChildren: Number(delay) + 0.1,
				delay: Number(delay),
			},
		},
	};

	const skillLogoVariants = {
		hidden: { opacity: 0, translateY: 10, transition: { duration: 0 } },
		visible: {
			opacity: 1,
			translateY: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className={`${styles['skills-box']} glass-dark-soft-no-gradient`}
			variants={skillBoxVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{
				once: false,
				amount: 0.9,
			}}
		>
			<span className={`${styles['box-title']}`}>{title}</span>
			<div className={`${styles['vertical-line']}`} />

			{logos.map((logo, index) => (
				<motion.div
					key={`${index}-logo`}
					className={styles['skill-logo']}
					variants={skillLogoVariants}
				>
					<Image
						src={logo.src}
						alt={logo.name || `${title} skill ${index + 1}`}
						width={40}
						height={40}
						style={{ 
							objectFit: 'contain', 
							userSelect: 'none',
							width: 'clamp(24px, 3vw, 40px)',
							height: 'clamp(24px, 3vw, 40px)'
						}}
					/>
					<span>{logo.name}</span>
				</motion.div>
			))}
		</motion.div>
	);
}
