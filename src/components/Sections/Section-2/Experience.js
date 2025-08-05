import styles from './Experience.module.css';
import { motion } from 'framer-motion';
import PopupLine from '../../UI/ExperienceBar/PopupLine';
import DateLine from '../../UI/ExperienceBar/ExpBarDateLine';
import TextBox from '@/components/UI/TextBox/TextBox';

export default function Experience(props) {

	const expBarVariants = {
		hidden: { scaleX: 0, transition: { duration: 0 } },
		visible: { scaleX: 1, transition: { duration: 2, delay: 0.3, ease: 'easeInOut' } },
	};

	const trailingDotVariants = {
		hidden: { opacity: 0, scale: 0.8, transition: { duration: 0} },
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
						delay='0.8'
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
						delay='0.9'
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
						delay='1'
					>
						<strong>Project: Slug Meter</strong>
						Front-End Developer
						<br />
						<em>Dec 2023</em>
					</PopupLine>
					<PopupLine
						positionLeft='27.2%'
						lineDirection='down'
						textDirection='right'
						delay='1.1'
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
						delay='1.35'
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
						delay='1.65'
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
						delay='1.85'
					>
						<strong>SyncQ Chatbot</strong>
						Feature <span style={{letterSpacing: '0.5px'}}>R&D</span>
						<br />
						<em>Feb 2025</em>
					</PopupLine>

					{/* The Experience Bar */}
					{/* TODO: Make me a component */}
					<motion.div
						className={styles['exp-bar']}
						variants={expBarVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{
							once: false,
							amount: 0.5,
						}}
						style={{
							originX: 0,
						}}
					/>

					{/* Date Lines (Years) */}
					<DateLine positionLeft='27.27%' delay='1.1' date='2024' />
					<DateLine positionLeft='81.81%' delay='1.7' date='2025' />
				</div>

				{/* Exp-Bar Trailing Dots */}
				{/* TODO: Make me a component */}
				<div className={`${styles['trailing-dots-container']}`}>
					<motion.div
						className={`${styles['exp-bar-trailing-dots']}`}
						variants={trailingDotVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{
							once: false,
							amount: 0.5,
						}}
						transition={{
							duration: 0.2,
							delay: 2.25,
							ease: 'easeOut',
						}}
						style={{ '--position-right': '-20px' }}
					/>
					<motion.div
						className={`${styles['exp-bar-trailing-dots']}`}
						variants={trailingDotVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{
							once: false,
							amount: 0.5,
						}}
						transition={{
							duration: 0.2,
							delay: 2.45,
							ease: 'easeOut',
						}}
						style={{ '--position-right': '-40px' }}
					/>
					<motion.div
						className={`${styles['exp-bar-trailing-dots']}`}
						variants={trailingDotVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{
							once: false,
							amount: 0.5,
						}}
						transition={{
							duration: 0.2,
							delay: 2.65,
							ease: 'easeOut',
						}}
						style={{ '--position-right': '-60px' }}
					/>
				</div>
			</div>
			<TextBox
				maxWidth='65%'
				minWidth='500px'
				opacity={0.65}
				delay='1.3'
				sectionNum={2}
			>
				<h1 style={{ marginBottom: '22px' }}>Experience</h1>
				<p>
					Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
					yardarm. Pinnace holystone mizzenmast quarter crows nest nipperkin
					grog yardarm hempen halter furl. Swab barque interloper chantey
					doubloon starboard grog black jack gangway rutters. Deadlights jack
					lad schooner scallywag dance the hempen jig carouser broadside cable
					strike colors. Bring a spring upon her cable holystone blow the man
					down spanker Shiver me timbers to go on account lookout wherry
					doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm
					spyglass sheet transom heave to.
				</p>
			</TextBox>
		</div>
	);
}
