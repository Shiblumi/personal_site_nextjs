import { motion } from 'motion/react';
import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import { memo } from 'react';
import styles from './ScrollingTimeline.module.css';

const TimelineDot = memo(({ isActive }) => {
	return (
		<motion.div
			className={styles['timeline-dot']}
			initial={{ scale: 0.8, opacity: 0.4 }}
			animate={{
				scale: isActive ? 1.2 : 0.8,
				opacity: isActive ? 1 : 0.4,
				boxShadow: isActive 
					? [
						'0 0 10px rgba(var(--logo-rgb), 0.6)',
						'0 0 20px rgba(var(--logo-rgb), 0.4)', 
						'0 0 30px rgba(var(--logo-rgb), 0.2)'
					].join(', ')
					: 'none',
				borderColor: isActive 
					? 'rgb(var(--logo-rgb))' 
					: 'rgba(var(--logo-rgb), 0.6)',
				backgroundColor: isActive 
					? 'rgb(var(--logo-rgb))' 
					: 'transparent',
			}}
			transition={{
				duration: 0.5,
				ease: 'easeOut',
			}}
		/>
	);
});

TimelineDot.displayName = 'TimelineDot';

export default function ScrollingTimeline() {
	const { activeSection } = useNavbarContext();

	const sections = [
		{ id: 1, name: 'home' },
		{ id: 2, name: 'exp' },
		{ id: 3, name: 'skills' },
		{ id: 4, name: 'projects' },
		{ id: 5, name: 'contact' },
	];

	return (
		<div className={`${styles['section-timeline-wrapper']}`}>
			{sections.map((section) => (
				<TimelineDot 
					key={section.id}
					section={section}
					isActive={activeSection === section.id}
				/>
			))}
		</div>
	);
}