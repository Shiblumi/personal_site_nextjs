import { motion } from 'framer-motion';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import styles from './TextBox.module.css';

export default function TextBox({
	text = 'Give me text.',
	maxWidth = '40vw',
	minWidth = '1000px',
	delay = '0.3',
}) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 3;
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
			style={{ maxWidth: maxWidth, minWidth: minWidth }}
		>
			<h1>Skills</h1>
			<br />
			Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
			yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
			yardarm hempen halter furl. Swab barque interloper chantey doubloon
			starboard grog black jack gangway rutters. Deadlights jack lad schooner
			scallywag dance the hempen jig carouser broadside cable strike colors.
			Bring a spring upon her cable holystone blow the man down spanker Shiver
			me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho
			keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
		</motion.div>
	);
}
