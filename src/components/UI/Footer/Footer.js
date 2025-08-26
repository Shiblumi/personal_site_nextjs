'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
	const footerRef = useRef(null);
	const isInView = useInView(footerRef, {
		once: false,
		amount: 0.75,
	});

	// Container animation variants
	const containerVariants = {
		hidden: {
			opacity: 0,
			y: 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				delay: 0.3,
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<motion.footer
			ref={footerRef}
			className={`${styles['footer-container']}`}
			variants={containerVariants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
		>
			<motion.a
				href='https://github.com/Shiblumi'
				target='_blank'
				rel='noopener noreferrer'
				whileHover='hover'
				whileTap='tap'
			>
				<motion.div>
					<Image
						className={`${styles['footer-img']}`}
						src='/images/logos/github-logo.svg'
						alt='GitHub Icon'
						width={28}
						height={28}
					/>
				</motion.div>
				GitHub
			</motion.a>

			<motion.a
				href='https://www.linkedin.com/in/dirk-wilson/'
				target='_blank'
				rel='noopener noreferrer'
				whileHover='hover'
				whileTap='tap'
			>
				<motion.div>
					<Image
						className={`${styles['footer-img']}`}
						src='/images/logos/linkedin-logo.svg'
						alt='LinkedIn Icon'
						width={28}
						height={28}
					/>
				</motion.div>
				LinkedIn
			</motion.a>

			<motion.a
				href='mailto:dirktaku@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
				whileHover='hover'
				whileTap='tap'
			>
				<motion.div>
					<Image
						className={`${styles['footer-img']}`}
						src='/images/email-icon.svg'
						alt='Email Icon'
						width={28}
						height={28}
					/>
				</motion.div>
				dirktaku@gmail.com
			</motion.a>

			<motion.a
				href='/documents/Wilson_Dirk_Resume.pdf'
				target='_blank'
				whileHover='hover'
				whileTap='tap'
			>
				<motion.div>
					<Image
						className={`${styles['footer-img']}`}
						src='/images/resume-icon.svg'
						alt='Resume Icon'
						width={28}
						height={28}
					/>
				</motion.div>
				Resume
			</motion.a>

			<motion.span>© 2025 Dirk Wilson</motion.span>
		</motion.footer>
	);
}
