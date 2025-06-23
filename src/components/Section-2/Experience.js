import styles from './Experience.module.css';
import { motion } from 'motion/react';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import DateLine from '../ExperienceBar/ExpBarDateLine';

export default function Experience(props) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 2;
	const trailingDotVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};

	/* Ted AI: Oct 2023
 PediBeat: Nov 2023
 Sitegeist: Jan 2024
 SyncQ: Jul 2024
 Graduate: Dec 2024 */
	return (
		<div className={`${styles['exp-container']}`}>
			<div className={styles['exp-bar-container']}>
				<div className={`${styles['exp-bar-wrapper']}`}>
					<motion.div
						className={styles['exp-bar']}
						initial={{ scaleX: 0 }}
						animate={{
							scaleX: shouldAnimate ? 1 : 0,
						}}
						transition={{
							duration: shouldAnimate ? 2.5 : 0,
							delay: shouldAnimate ? 0.3 : 0,
							ease: 'easeInOut',
						}}
						style={{
							originX: 0,
						}}
					/>
					<DateLine positionLeft='20%' delay='1.1' />
					<DateLine positionLeft='50%' delay='1.6' />
					<DateLine positionLeft='80%' delay='2.1' />
				</div>

				{/* <motion.div className={`${styles["checkpoint"]}`} /> */}
				<div className={`${styles['trailing-dots-container']}`}>
					<motion.div
						className={`${styles['exp-bar-trailing-dots']}`}
						variants={trailingDotVariants}
						initial='hidden'
						animate={shouldAnimate ? 'visible' : 'hidden'}
						transition={{
							duration: shouldAnimate ? 0.2 : 0,
							delay: shouldAnimate ? 2.75 : 0,
							ease: 'easeOut',
						}}
						style={{ '--position-right': '-20px' }}
					/>
					<motion.div
						className={`${styles['exp-bar-trailing-dots']}`}
						variants={trailingDotVariants}
						initial='hidden'
						animate={shouldAnimate ? 'visible' : 'hidden'}
						transition={{
							duration: shouldAnimate ? 0.2 : 0,
							delay: shouldAnimate ? 2.95 : 0,
							ease: 'easeOut',
						}}
						style={{ '--position-right': '-40px' }}
					/>
					<motion.div
						className={`${styles['exp-bar-trailing-dots']}`}
						variants={trailingDotVariants}
						initial='hidden'
						animate={shouldAnimate ? 'visible' : 'hidden'}
						transition={{
							duration: shouldAnimate ? 0.2 : 0,
							delay: shouldAnimate ? 3.15 : 0,
							ease: 'easeOut',
						}}
						style={{ '--position-right': '-60px' }}
					/>
				</div>
			</div>
		</div>
	);
}
