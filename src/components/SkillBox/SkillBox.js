import styles from './SkillBox.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';

export default function SkillBox({ title, logos = [], delay = '0.2' }) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 3;

	const skillBoxVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				ease: 'easeOut',
				staggerChildren: 0.11,
				delayChildren: Number(delay) + 0.1,
				delay: shouldAnimate ? Number(delay) : 0,
			},
		},
	};

	const skillLogoVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
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
			animate={shouldAnimate ? 'visible' : 'hidden'}
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
						style={{ objectFit: 'contain', userSelect: 'none' }}
					/>
					<span>{logo.name}</span>
				</motion.div>
			))}
		</motion.div>
	);
}
