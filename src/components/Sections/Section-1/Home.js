'use client';

import styles from './Home.module.css';
import AlternatingText from '../../UI/AlternatingText/AlternatingText';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Home() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: false,
		amount: 0.75,
	});

	const nameParentVariants = {
		hidden: {
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const nameVariants = {
		hidden: {
			opacity: 0,
			// filter: 'blur(8px)',
			transition: {
				duration: 0.2,
			},
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

	const buttonBlurVariants = {
		hidden: {
			opacity: 0,
			backdropFilter: 'blur(0px)',
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			opacity: 1,
			backdropFilter: 'blur(5px)',
			transition: {
				duration: 1.2,
				ease: 'easeIn',
			},
		},
	};

	return (
		<motion.div
			className={styles['home-container']}
			variants={nameParentVariants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
		>
			<motion.div ref={sectionRef} className={styles['home-content-container']}>
				{/* Name */}
				<motion.div className={styles['name-wrapper']} variants={nameVariants}>
					<span className={`${styles['dirk']} full-dropshadow`}>
						<span className={styles['di']}>DI</span>RK
					</span>
					<span className={`${styles['wilson']} full-dropshadow`}>
						<span className={styles['wi']}>WI</span>LSON
					</span>
				</motion.div>

				{/* Alternating Text */}
				<motion.div variants={nameVariants}>
					<AlternatingText />
				</motion.div>

				{/* Intro Text */}
				{/* <TextBox styles={{ maxWidth: '600px' }} delay='0.8' opacity={0.3}>
					<p>Hi my name is uuuuuuh.</p>
				</TextBox> */}

				{/* Buttons */}
				<div style={{ width: '100%' }}>
					<div className={styles['buttons-wrapper']}>
						<motion.button
							type='button'
							className={`${styles['home-button']} glass-dark-primary`}
							variants={buttonBlurVariants}
							onClick={() => {
								document.getElementById('contact').scrollIntoView({
									behavior: 'auto',
								});
							}}
							whileTap={{
								scale: 0.98,
								transition: {
									duration: 0.1,
								},
							}}
						>
							Contact
						</motion.button>
						<motion.button
							type='button'
							className={styles['home-button']}
							onClick={() => {
								document.getElementById('exp').scrollIntoView({
									behavior: 'smooth',
								});
							}}
							variants={nameVariants}
							whileTap={{
								scale: 0.98,
								transition: {
									duration: 0.1,
								},
							}}
							style={{ backdropFilter: 'none' }}
						>
							About Me
							<Image
								className={`${styles['home-button-down-arrow']}`}
								src='/images/down-arrow.svg'
								alt=''
								width={38}
								height={38}
							/>
						</motion.button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
