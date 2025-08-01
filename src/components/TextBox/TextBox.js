import { motion } from 'framer-motion';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import styles from './TextBox.module.css';

export default function TextBox({
	text = 'Give me text.',
	maxWidth = '50vw',
	minWidth = '1000px',
}) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 3;
	return (
		<motion.div
			className={`${styles['text-container']} glass-dark-soft-no-gradient`}
			initial={{ scale: 0.98, opacity: 0 }}
			animate={shouldAnimate ? { scale: 1, opacity: 1 } : { scale: 0.98, opacity: 0 }}
			transition={{
							duration: shouldAnimate ? 0.8 : 0,
							delay: shouldAnimate ? 1.1 : 0,
							ease: 'easeOut',
						}}
			style={{ maxWidth: maxWidth, minWidth: minWidth }}
		>
			Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
			ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
			duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
			vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
			malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
			aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
			himenaeos.
		</motion.div>
	);
}
