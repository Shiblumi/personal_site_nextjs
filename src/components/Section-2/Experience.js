import styles from './Experience.module.css';
import { motion } from 'motion/react';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import Popup from '../ExperienceBar/PopupBox';
import PopupLine from '../ExperienceBar/PopupLine';
// import DateLine from '../ExperienceBar/ExpBarDateLine';

function DateLine({ positionLeft, delay }) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 2;

	const dateLineVariants = {
		hidden: { opacity: 0, scale: 0.9, height: 0 },
		visible: { opacity: 1, scale: 1, height: 28 },
	};

	return (
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
			animate={shouldAnimate ? 'visible' : 'hidden'}
			transition={{
				duration: 0.3,
				delay: shouldAnimate ? delay : 0,
				ease: 'easeOut',
			}}
		/>
	);
}

export default function Experience(props) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 2;
	const trailingDotVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};

	/* 	
		13.6% Ted AI: Oct 2023
		18.2% PediBeat: Nov 2023
		22.7% SlugMeter: Dec 2023 
		27.2% Sitegeist: Jan 2024
		54.54% SyncQ: Jul 2024
		77.3% Graduate: Dec 2024
	*/
	return (
		<div className={`${styles['exp-container']}`}>
			<div className={styles['exp-bar-container']}>
				<div className={`${styles['exp-bar-wrapper']}`}>
					<PopupLine positionLeft='13.6%' lineDirection='up'/>
					<PopupLine positionLeft='18.2%' lineDirection='down'/>
					<PopupLine positionLeft='22.7%' lineDirection='up'/>
					<PopupLine positionLeft='27.2%' lineDirection='down'/>
					<PopupLine positionLeft='54.54%' lineDirection='up'/>
					<PopupLine positionLeft='77.3%' lineDirection='down'/>
					{/* <Popup 
                        isVisible={shouldAnimate} 
                        position={{ top: '-200%', left: '10%' }} 
                        triangle='bottom'
                    />
                    
                    <Popup 
                        isVisible={shouldAnimate} 
                        position={{ top: '100%', left: '15%' }} 
                        triangle='top'
                    />
                    
                    <Popup 
                        isVisible={shouldAnimate} 
                        position={{ top: '-200%', left: '20%' }} 
                        triangle='bottom'
                    />
                    
                    <Popup 
                        isVisible={shouldAnimate} 
                        position={{ top: '100%', left: '22.5%' }} 
                        triangle='top'
                    />
                    
                    <Popup 
                        isVisible={shouldAnimate} 
                        position={{ top: '-200%', left: '35%' }} 
                        triangle='bottom'
                    />
                    
                    <Popup 
                        isVisible={shouldAnimate} 
                        position={{ top: '100%', left: '50%' }} 
                        triangle='top'
                    /> */}
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
					<DateLine positionLeft='27.27%' delay='1.2' />
					<DateLine positionLeft='81.81%' delay='2.0' />
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
