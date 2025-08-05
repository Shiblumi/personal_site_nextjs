import { motion } from 'motion/react';
import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import styles from './ScrollingTimeline.module.css';

export default function ScrollingTimeline() {
	const { activeSection } = useNavbarContext();

	const sections = [
		{ id: 1, name: 'home' },
		{ id: 2, name: 'exp' },
		{ id: 3, name: 'skills' },
		{ id: 4, name: 'projects' },
		{ id: 5, name: 'contact' },
	];

	// FIXME: 5th dot flickers when navigating between sections 3-4 due to Framer Motion re-evaluating all animate props
	return (
		<div className={`${styles['section-timeline-wrapper']}`}>
			{sections.map((section) => (
				<motion.div
					key={section.id}
					className={`${styles['timeline-dot']} ${
						activeSection === section.id ? styles['active'] : ''
					}`}
					initial={{ scale: 0.8, opacity: 0.4 }}
					animate={{
						scale: activeSection === section.id ? 1.2 : 0.8,
						opacity: activeSection === section.id ? 1 : 0.4,
					}}
					transition={{
						duration: 0.3,
						ease: 'easeOut',
					}}
				/>
			))}
		</div>
	);
}
