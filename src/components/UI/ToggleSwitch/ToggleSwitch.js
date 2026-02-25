import { motion } from 'motion/react';
import styles from './ToggleSwitch.module.css';
import { useState } from 'react';

function ToggleSwitch({ handleToggle, thumbText = '' }) {
	const [isOn, setIsOn] = useState(true);

	const toggle = () => {
		setIsOn(!isOn);
		// handleToggle(!isOn);
	};

	return (
		<motion.button
			className={`${styles['toggle-switch-slider']} glass-dark-primary`}
			onClick={toggle}
			initial={{
				backgroundColor: 'rgba(var(--secondary-rgb), 0.5)',
			}}
			animate={{
				backgroundColor: isOn
					? 'rgba(var(--secondary-rgb), 0.5)'
					: 'rgba(var(--secondary-rgb), 0.1)',
			}}
			transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
		>
			<motion.div
				className={`${styles['toggle-switch-thumb']}`}
				initial={{
					x: 25,
					backgroundColor: 'rgba(var(--logo-rgb), 0.8)',
					boxShadow: '-6px 1px 12px rgba(var(--bg-dark-rgb), 0.5)',
				}}
				animate={{
					x: isOn ? 25 : 2,
					backgroundColor: isOn
						? 'rgba(var(--logo-rgb), 0.8)'
						: 'rgba(var(--secondary-rgb), 0.1)',
					boxShadow: isOn
						? '-6px 1px 12px rgba(var(--bg-dark-rgb), 0.5)'
						: '6px 2px 12px rgba(var(--bg-dark-rgb), 1)',
				}}
				transition={{
					default: { type: 'tween', duration: 0.2, ease: 'easeOut' },
					x: { type: "spring", stiffness: 800, damping: 50 },
				}}
			>
				<motion.strong
					className={`${styles['toggle-switch-text']}`}
					initial={{ color: 'rgba(var(--bg-dark-rgb), 0.7)' }}
					animate={{
						color: isOn
							? 'rgba(var(--bg-dark-rgb), 0.8)'
							: 'rgba(var(--secondary-rgb), 1)',
					}}
					transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
				>
					{thumbText}
				</motion.strong>
			</motion.div>
		</motion.button>
	);
}

export default ToggleSwitch;
