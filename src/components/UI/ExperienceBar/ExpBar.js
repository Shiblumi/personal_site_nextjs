import styles from '@/components/UI/ExperienceBar/ExpBar.module.css';
import { motion } from 'framer-motion';
import ExpBarFlag from '@/components/UI/ExperienceBar/ExpBarFlag';
import YearMarker from '@/components/UI/ExperienceBar/ExpBarYearMarker';
import { calculateFlagPosition, calculateDelayForPosition } from '@/components/UI/ExperienceBar/ExpBarUtils';
import ExpBarContent from '@/components/UI/ExperienceBar/ExpBarMetadata';

export default function ExpBarSection({ isInView }) {
	const EXP_ANIM_DURATION = 2;
	const EXP_ANIM_DELAY = 0.3;

	const expBarVariants = {
		hidden: { scaleX: 0, transition: { duration: 0.2 } },
		visible: {
			scaleX: 1,
			transition: { duration: EXP_ANIM_DURATION, delay: EXP_ANIM_DELAY, ease: 'easeInOut' },
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
					positionLeft={calculateFlagPosition('Jan', 2024) + '%'}
					delay={calculateDelayForPosition(parseFloat(calculateFlagPosition('Jan', 2024)), EXP_ANIM_DURATION, EXP_ANIM_DELAY)}
					date='2024'
					isInView={isInView}
				/>
				<YearMarker
					positionLeft={calculateFlagPosition('Jan', 2025) + '%'}
					delay={calculateDelayForPosition(parseFloat(calculateFlagPosition('Jan', 2025)), EXP_ANIM_DURATION, EXP_ANIM_DELAY)}
					date='2025'
					isInView={isInView}
				/>
				<YearMarker
					positionLeft={calculateFlagPosition('Jan', 2026) + '%'}
					delay={calculateDelayForPosition(parseFloat(calculateFlagPosition('Jan', 2026)), EXP_ANIM_DURATION, EXP_ANIM_DELAY)}
					date='2026'
					isInView={isInView}
				/>

				{/* Exp-Bar Flags */}
				{ExpBarContent.map((item, index) => {
                    const positionLeft = calculateFlagPosition(item.dateStart.month, item.dateStart.year);
                    const delay = calculateDelayForPosition(parseFloat(positionLeft), EXP_ANIM_DURATION, EXP_ANIM_DELAY);

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