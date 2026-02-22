import styles from './ExpBar.module.css';
import { motion } from 'framer-motion';
import PopupLine from '@/components/UI/ExperienceBar/PopupLine';
import DateLine from '@/components/UI/ExperienceBar/ExpBarDateLine';

export default function ExpBarSection({ isInView }) {
	const expBarVariants = {
		hidden: { scaleX: 0, transition: { duration: 0.2 } },
		visible: {
			scaleX: 1,
			transition: { duration: 2, delay: 0.3, ease: 'easeInOut' },
		},
	};

	const trailingDotVariants = {
		hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<div className={styles['exp-bar-and-trailing-dots-container']}>

			{/* The Experience Bar */}
			<div className={styles['exp-bar-wrapper']}>
				<PopupLine
					positionLeft='13.6%'
					lineDirection='up'
					textDirection='left'
					delay='0.8'
					isInView={isInView}
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
					isInView={isInView}
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
					isInView={isInView}
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
					isInView={isInView}
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
					isInView={isInView}
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
					isInView={isInView}
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
					delay='1.8'
					isInView={isInView}
				>
					<strong>SyncQ Chatbot</strong>
					Feature <span style={{ letterSpacing: '0.5px' }}>R&D</span>
					<br />
					<em>Feb 2025</em>
				</PopupLine>

				<motion.div
					className={styles['exp-bar']}
					variants={expBarVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					style={{ originX: 0 }}
				/>

				{/* Date Lines (Years) */}
				<DateLine
					positionLeft='27.27%'
					delay='1.1'
					date='2024'
					isInView={isInView}
				/>
				<DateLine
					positionLeft='81.81%'
					delay='1.7'
					date='2025'
					isInView={isInView}
				/>
			</div>

			{/* Exp-Bar Trailing Dots */}
			<div className={styles['trailing-dots-container']}>
				<motion.div
					className={styles['exp-bar-trailing-dots']}
					variants={trailingDotVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					transition={{ duration: 0.2, delay: 2.25, ease: 'easeOut' }}
				/>
				<motion.div
					className={styles['exp-bar-trailing-dots']}
					variants={trailingDotVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					transition={{ duration: 0.2, delay: 2.45, ease: 'easeOut' }}
				/>
				<motion.div
					className={styles['exp-bar-trailing-dots']}
					variants={trailingDotVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					transition={{ duration: 0.2, delay: 2.65, ease: 'easeOut' }}
				/>
			</div>
		</div>
	);
}