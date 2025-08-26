'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { useNavbarContext } from '../ActiveSectionContext';
import ChromaticText from '@/components/UI/ChromaticText/ChromaticText';

export default function Navbar() {
	const { activeSection } = useNavbarContext();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const navLinks = [
		{ href: '#home', label: 'Home', section: 1 },
		{ href: '#exp', label: 'Exp', section: 2 },
		{ href: '#skills', label: 'Skills', section: 3 },
		{ href: '#projects', label: 'Projects', section: 4 },
		{ href: '#contact', label: 'Contact', section: 5 },
	];

	// Handle responsive breakpoint
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1000);
			// Close menu when switching to desktop
			if (window.innerWidth > 1000) {
				setIsMenuOpen(false);
			}
		};
		// Check on mount
		handleResize();
		window.addEventListener('resize', handleResize);
		// Cleanup on dismount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Close menu when clicking on a link
	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	// Prevent page scroll when menu is open
	useEffect(() => {
		if (isMenuOpen && isMobile) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		// Cleanup on dismount
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen, isMobile]);

	// Hamburger animation variants for each line
	const topLineVariants = {
		closed: {
			rotate: 0,
			y: 0,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		open: {
			rotate: 45,
			y: 8,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	const middleLineVariants = {
		closed: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		open: {
			opacity: 0,
			scale: 0.6,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	const bottomLineVariants = {
		closed: {
			rotate: 0,
			y: 0,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		open: {
			rotate: -45,
			y: -8,
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	// Mobile menu overlay variants
	const overlayVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: 'easeIn',
			},
		},
	};

	// Mobile menu variants
	const menuVariants = {
		hidden: {
			y: 20,
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.2,
				ease: 'easeInOut',
			},
		},
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
				staggerChildren: 0.05,
				delayChildren: 0.2,
			},
		},
		exit: {
			y: 20,
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.5,
				ease: 'easeIn',
			},
		},
	};

	// Mobile menu link variants
	const linkVariants = {
		hidden: {
			y: 10,
			scale: 0.9,
			opacity: 0,
		},
		visible: {
			y: 0,
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.3,
				// ease: 'easeInOut',
			},
		},
		exit: {
			y: 0,
			scale: 0.9,
			opacity: 0,
			transition: {
				duration: 0.2,
				ease: 'easeOut',
			},
		},
	};

	return (
		<nav className={`${styles['navbar']}`}>
			<div className={styles['navbar-content']}>
				<Link
					href='#home'
					className={`${styles['navbar-logo-text']} full-dropshadow`}
					onClick={handleLinkClick}
				>
					DIWI
				</Link>

				{/* Desktop Navbar */}
				<div className={`${styles['navbar-link-container']}`}>
					{navLinks.map((link) => (
						<Link
							key={link.section}
							href={link.href}
							className={`${styles['navbar-link']}`}
							onClick={handleLinkClick}
						>
							<ChromaticText isActive={activeSection === link.section}>
								{link.label}
							</ChromaticText>
						</Link>
					))}
				</div>

				{/* Hamburger Menu */}
				<motion.button
					className={styles['hamburger']}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label='Toggle navigation menu'
					aria-expanded={isMenuOpen}
					whileTap={{ scale: 0.95 }}
				>
					<motion.span
						variants={topLineVariants}
						initial='closed'
						animate={isMenuOpen ? 'open' : 'closed'}
						className={styles['hamburger-line']}
					/>
					<motion.span
						variants={middleLineVariants}
						initial='closed'
						animate={isMenuOpen ? 'open' : 'closed'}
						className={styles['hamburger-line']}
					/>
					<motion.span
						variants={bottomLineVariants}
						initial='closed'
						animate={isMenuOpen ? 'open' : 'closed'}
						className={styles['hamburger-line']}
					/>
				</motion.button>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence mode='wait'>
				{isMenuOpen && (
					<motion.div
						className={styles['mobile-menu-overlay']}
						variants={overlayVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						onClick={() => setIsMenuOpen(false)}
					>
						<motion.div
							className={`${styles['mobile-menu']} glass-dark-soft-no-gradient`}
							variants={menuVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
							onClick={(e) => e.stopPropagation()}
						>
							{navLinks.map((link, index) => (
								<motion.div
									key={link.section}
									variants={linkVariants}
									custom={index}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										href={link.href}
										className={styles['mobile-menu-link']}
										onClick={handleLinkClick}
									>
										<ChromaticText isActive={activeSection === link.section}>
											{link.label}
										</ChromaticText>
									</Link>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
