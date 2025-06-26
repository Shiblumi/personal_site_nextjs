// Create a new file: src/components/Popup/Popup.js
import styles from './PopupBox.module.css';
import { motion } from 'motion/react';

const trianglePosition = {
	top: 'triangle-top',
	right: 'triangle-right',
	bottom: 'triangle-bottom',
	left: 'triangle-left',
};
function Popup({
	isVisible,
	position = { top: '100%', left: '0%' },
	triangle = null,
}) {
	const trianglePos = trianglePosition[triangle];
	return (
		<motion.div
			className={styles['popup-container']}
			style={{
				top: position.top,
				left: position.left,
			}}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: isVisible ? 1 : 0,
				scale: isVisible ? 1 : 0.8,
			}}
			transition={{
				duration: 0.3,
				ease: 'easeOut',
			}}
		>
			<div className={styles[trianglePos]} />

			<div className={`${styles['popup-content']} glass-dark-soft`}>Hello</div>
		</motion.div>
	);
}

export default Popup;
