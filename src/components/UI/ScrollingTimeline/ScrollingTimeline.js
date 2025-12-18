import { motion } from 'motion/react';
import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import { memo } from 'react';
import styles from './ScrollingTimeline.module.css';

const TimelineDot = memo(({ isActive }) => {
	return (
		<motion.a
			className={styles['timeline-dot']}
			initial={{ scale: 0.8, opacity: 0.4 }}
			animate={{
				scale: isActive ? 1.2 : 0.8,
				opacity: isActive ? 1 : 0.4,
				boxShadow: isActive
					? [
							'0 0 10px rgba(var(--logo-rgb), 0.6)',
							'0 0 20px rgba(var(--logo-rgb), 0.4)',
							'0 0 30px rgba(var(--logo-rgb), 0.2)',
					  ].join(', ')
					: 'none',
				borderColor: isActive
					? 'rgb(var(--logo-rgb))'
					: 'rgba(var(--logo-rgb), 0.6)',
				backgroundColor: isActive ? 'rgb(var(--logo-rgb))' : 'transparent',
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
		{ id: 1, href: '#home', title: 'Home' },
		{ id: 2, href: '#exp', title: 'Exp' },
		{ id: 3, href: '#skills', title: 'Skills' },
		{ id: 4, href: '#projects', title: 'Projects' },
		{ id: 5, href: '#contact', title: 'Contact' },
	];

	return (
		<div className={`${styles['section-timeline-wrapper']}`}>
			{sections.map((section) => (
				<a
					className={`${styles['timeline-dot-wrapper']}`}
					key={`Dot-Wrapper-${section.id}`}
					href={section.href}
					title={section.title}
				>
					<TimelineDot
						key={section.id}
						href={section.href}
						section={section}
						isActive={activeSection === section.id}
					/>
				</a>
			))}
		</div>
	);
}
