import styles from '@/components/UI/ExperienceBar/ExpBar.module.css';
import { motion } from 'framer-motion';
import ExpBarFlag from '@/components/UI/ExperienceBar/ExpBarFlag';
import YearMarker from '@/components/UI/ExperienceBar/ExpBarYearMarker';
import { calculateFlagPosition, calculateDelayForPosition } from '@/components/UI/ExperienceBar/ExpBarUtils';
import ExpBarContent from '@/components/UI/ExperienceBar/ExpBarMetadata';

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
			<div className={styles['exp-bar-wrapper']}>
				{/* Exp-Bar Line */}
				<motion.div
					className={styles['exp-bar']}
					variants={expBarVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					style={{ originX: 0 }}
				/>

				{/* Exp-Bar Year Markers */}
				<YearMarker
					// positionLeft='27.27%'
					positionLeft={calculateFlagPosition('Jan', 2024) + '%'}
					delay={calculateDelayForPosition(parseFloat(calculateFlagPosition('Jan', 2024)), 2, 0.3)}
					date='2024'
					isInView={isInView}
				/>
				<YearMarker
					positionLeft={calculateFlagPosition('Jan', 2025) + '%'}
					delay={calculateDelayForPosition(parseFloat(calculateFlagPosition('Jan', 2025)), 2, 0.3)}
					date='2025'
					isInView={isInView}
				/>
				<YearMarker
					positionLeft={calculateFlagPosition('Jan', 2026) + '%'}
					delay={calculateDelayForPosition(parseFloat(calculateFlagPosition('Jan', 2026)), 2, 0.3)}
					date='2026'
					isInView={isInView}
				/>

				{/* Exp-Bar Flags */}
				{ExpBarContent.map((item, index) => {
                    const positionLeft = calculateFlagPosition(item.dateStart.month, item.dateStart.year);
                    const delay = calculateDelayForPosition(parseFloat(positionLeft), 2, 0.3);

                    return (
                        <ExpBarFlag
                            key={index}
                            positionLeft={positionLeft + '%'}
                            lineDirection={item.lineDirection}
                            textDirection={item.textDirection}
                            delay={delay}
                            isInView={isInView}
                        >
                            <strong>{item.title}</strong>
                            {item.description}
                            <br />
                            <em>
                                {item.dateStart.month} {item.dateStart.year}
                                {item.dateEnd && item.dateEnd.month ? ` - ${item.dateEnd.month} ${item.dateEnd.year}` : ''}
                            </em>
                        </ExpBarFlag>
                    );
                })}
				{/* <ExpBarFlag
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
				</ExpBarFlag>
				<ExpBarFlag
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
				</ExpBarFlag>
				<ExpBarFlag
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
				</ExpBarFlag>
				<ExpBarFlag
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
				</ExpBarFlag>
				<ExpBarFlag
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
				</ExpBarFlag>
				<ExpBarFlag
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
				</ExpBarFlag>
				<ExpBarFlag
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
				</ExpBarFlag> */}
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