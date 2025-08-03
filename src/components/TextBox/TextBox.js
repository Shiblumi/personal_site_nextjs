import { motion } from 'framer-motion';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import styles from './TextBox.module.css';

export default function TextBox({
	maxWidth = '40vw',
	minWidth = '1000px',
    opacity = 0,
	delay = '0.3',
	sectionNum,
	children,
}) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = sectionNum === activeSection;
	const variants = {
		hidden: { scale: 0.98, opacity: 0 },
		visible: { scale: 1, opacity: 1 },
	};

	return (
		<motion.div
			className={`${styles['text-container']} glass-dark-soft-no-gradient`}
			initial='hidden'
			animate={shouldAnimate ? 'visible' : 'hidden'}
			variants={variants}
			transition={{
				duration: shouldAnimate ? 0.8 : 0,
				delay: shouldAnimate ? delay : 0,
				ease: 'easeOut',
			}}
			style={{ maxWidth: maxWidth, minWidth: minWidth, backgroundColor: `rgba(var(--bg-dark-rgb), ${opacity})` }}
		>
			{children}
		</motion.div>
	);
}
