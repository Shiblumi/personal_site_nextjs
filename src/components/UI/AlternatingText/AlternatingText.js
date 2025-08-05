import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AlternatingText.module.css';
import { useNavbarContext } from '@/components/UI/NavbarContext';

const roles = [
	'Full Stack Developer',
	'A.I. Integrator',
	'3D Artist',
	'Video Editor',
	'Photographer',
	'Gaming Enthusiast',
];

const CYCLE_INTERVAL = 3000;

export default function AlternatingText() {
	const [index, setIndex] = useState(0);
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 1;

	useEffect(() => {
		if (!shouldAnimate) {
			setIndex(0);
			return;
		}

		const intervalId = setInterval(() => {
			setIndex((i) => (i + 1) % roles.length);
		}, CYCLE_INTERVAL);

		return () => clearInterval(intervalId);

		return () => clearTimeout(startCycling);
	}, [shouldAnimate]);

	// Animation variants
	const textVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			// filter: "blur(4px)"
		},
		visible: {
			opacity: 1,
			y: 0,
			// filter: "blur(0px)",
			transition: {
				duration: 0.4,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			// filter: "blur(4px)",
			transition: {
				duration: 0.3,
				ease: 'easeIn',
			},
		},
	};

	return (
		<div className={styles['dynamic-text-wrapper']}>
			<AnimatePresence mode='wait'>
				{shouldAnimate && (
					<motion.span
						key={`${index}-${roles[index]}`}
						className={`${styles['dynamic-text']} full-dropshadow-light`}
						variants={textVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						{roles[index]}
					</motion.span>
				)}
			</AnimatePresence>
		</div>
	);
}
