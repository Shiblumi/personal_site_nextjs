import styles from './Experience.module.css';
import { motion } from 'framer-motion';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import PopupLine from '../ExperienceBar/PopupLine';
import DateLine from '../ExperienceBar/ExpBarDateLine';

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
		54.5% SyncQ: Jul 2024
		77.3% Graduate: Dec 2024
		86.4% SyncQ Chatbot: Feb 2025
	*/
	return (
		<div className={`${styles['exp-container']}`}>
			<div className={styles['exp-bar-container']}>
				<div className={`${styles['exp-bar-wrapper']}`}>
					<PopupLine
						positionLeft='13.6%'
						lineDirection='up'
						textDirection='left'
						isVisible={shouldAnimate}
						delay='0.93'
					>
						<strong>Ted AI Hackathon</strong>
						Project: Maptodon
						<br />
						<em>Oct 2023</em>
					</PopupLine>
					<PopupLine
						positionLeft='18.2%'
						lineDirection='down'
						textDirection='left'
						isVisible={shouldAnimate}
						delay='1.07'
					>
						<strong>CalHacks 10.0</strong>
						Project: PediBeat
						<br />
						<em>Nov 2023</em>
					</PopupLine>
					<PopupLine
						positionLeft='22.7%'
						lineDirection='up'
						textDirection='right'
						isVisible={shouldAnimate}
						delay='1.15'
					>
						<strong>Project: Slug Meter</strong>
						Lead Front-End Developer
						<br />
						<em>Dec 2023</em>
					</PopupLine>
					<PopupLine
						positionLeft='27.2%'
						lineDirection='down'
						textDirection='right'
						isVisible={shouldAnimate}
						delay='1.3'
					>
						<strong>CruzHacks</strong>
						Project: Sitegeist
						<br />
						<em>Jan 2024</em>
					</PopupLine>
					<PopupLine
						positionLeft='54.54%'
						lineDirection='up'
						textDirection='right'
						isVisible={shouldAnimate}
						delay='1.58'
					>
						<strong>Company: SyncQ</strong>
						Software Developer
						<br />
						<em>Jul 2024 - Present</em>
					</PopupLine>
					<PopupLine
						positionLeft='77.3%'
						lineDirection='down'
						textDirection='left'
						isVisible={shouldAnimate}
						delay='1.92'

					>
						<strong>Graduate: UC Santa Cruz</strong>
						B.S. Computer Science
						<br />
						<em>Dec 2024</em>
					</PopupLine>
					<PopupLine
						positionLeft='86.4%'
						lineDirection='up'
						textDirection='right'
						isVisible={shouldAnimate}
						delay='2.2'

					>
						<strong>SyncQ Chatbot</strong>
						Feature Development
						<br />
						<em>Feb 2025</em>
					</PopupLine>
					{/* TODO: Make me a component */}
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
					<DateLine positionLeft='27.27%' delay='1.2' date='2024' />
					<DateLine positionLeft='81.81%' delay='2.0' date='2025' />
				</div>

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
