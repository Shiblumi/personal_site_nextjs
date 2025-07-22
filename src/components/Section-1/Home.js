'use client';

import styles from '@/components/Section-1/Home.module.css';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import ActionButton from '@/components/Buttons/ActionButton';
import DynamicText from '../DynamicText/DynamicText';
import DownArrow from '@/components/Icons/DownArrow';
import { motion } from 'framer-motion';

export default function Home() {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 1;

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const childVariants = {
		hidden: {
			opacity: 0,
			// filter: 'blur(8px)',
		},
		visible: {
			opacity: 1,
			// filter: 'blur(0px)',
			transition: {
				duration: 1.2,
				ease: 'easeIn',
			},
		},
	};

	return (
		<motion.div
			className={styles['home-container']}
			variants={containerVariants}
			initial='hidden'
			animate={shouldAnimate ? 'visible' : 'hidden'}
			style={{
				willChange: 'filter, opacity',
			}}
		>
			{/* Name */}
			<motion.div className={styles['name-wrapper']} variants={childVariants}>
				<span className={`${styles['dirk']} full-dropshadow`}>
					<span className={styles['di']}>DI</span>RK
				</span>
				<br />
				<span className={`${styles['wilson']} full-dropshadow`}>
					<span className={styles['wi']}>WI</span>LSON
				</span>
			</motion.div>

			{/* Dynamic Text */}
			<motion.div variants={childVariants}>
				<DynamicText />
			</motion.div>

			{/* Buttons */}
			<motion.div variants={childVariants}>
				<div className={styles['buttons-wrapper']}>
					<ActionButton
						text='Contact'
						class='glass-dark-primary'
						routeTo='contact'
						sectionNum={1}
					/>
					<ActionButton
						text='Learn More'
						class='full-dropshadow-hoverable'
						routeTo='exp'
						sectionNum={1}
						icon={DownArrow}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
