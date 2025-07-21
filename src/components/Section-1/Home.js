"use client";

import styles from '@/components/Section-1/Home.module.css';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import ActionButton from '@/components/Buttons/ActionButton';
import DynamicText from '../DynamicText/DynamicText';
import DownArrow from '@/components/Icons/DownArrow';
import { motion } from 'framer-motion';

export default function Home(props) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 1;

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const childVariants = {
		hidden: {
			opacity: 0,
			filter: 'blur(5px)',
		},
		visible: {
			opacity: 1,
			filter: 'blur(0px)',
			transition: {
				duration: 1.5,
				ease: 'easeOut',
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
				willChange: 'opacity',
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
			<motion.div className={styles['buttons-wrapper']}>
				<motion.div variants={childVariants}>
					<ActionButton
						text='Contact'
						class='glass-dark-primary'
						routeTo='contact'
						sectionNum={1}
					/>
				</motion.div>
				<motion.div variants={childVariants}>
					<ActionButton
						text='Learn More'
						class='full-dropshadow-hoverable'
						routeTo='exp'
						sectionNum={1}
						icon={DownArrow}
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
