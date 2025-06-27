import { motion } from 'motion/react';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';

export default function DateLine({ positionLeft, delay, date = '2049' }) {
	const { activeSection } = useNavbarContext();
	const shouldAnimate = activeSection === 2;

	const dateLineVariants = {
		hidden: { opacity: 0, scale: 0.9, height: 0 },
		visible: { opacity: 1, scale: 1, height: 28 },
	};

	return (
		<>
            <motion.div
                style={{
                    position: 'absolute',
                    left: positionLeft,
                    width: '2px',
                    height: '28px',
                    borderRadius: '3px',
                    background: 'rgba(148, 200, 255, 1)',
                    filter: 'blur(1px)',
                }}
                variants={dateLineVariants}
                initial='hidden'
                animate={shouldAnimate ? 'visible' : 'hidden'}
                transition={{
                    duration: 0.3,
                    delay: shouldAnimate ? delay : 0,
                    ease: 'easeOut',
                }}
            />
            
            <motion.span
                style={{
                    position: 'absolute',
                    bottom: '63px',
                    left: `calc(${positionLeft} - 18px)`,
                    zIndex: 1,
                    fontWeight: '600',
                    color: 'rgba(var(--secondary-rgb), 0.9)',
                }}
                initial={{ opacity: 0 }}
                animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                    duration: 0.3,
                    delay: shouldAnimate ? Number(delay) + 0.1 : 0,
                    ease: 'easeOut',
                }}
            >
                {date}
            </motion.span>
        </>
	);
}
