'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useNavbarContext } from '../ActiveSectionContext';
import ChromaticText from '@/components/UI/ChromaticText/ChromaticText';

export default function Navbar() {
	const { activeSection } = useNavbarContext();

	return (
		<nav className={`${styles['navbar']}`}>
			<div className={styles['navbar-content']}>
				<Link
					href='#home'
					className={`${styles['navbar-logo-text']} full-dropshadow`}
				>
					DIWI
				</Link>
				<div className={`${styles['navbar-link-container']}`}>
					<Link href='#home' className={`${styles['navbar-link']}`}>
						<ChromaticText isActive={activeSection === 1}>Home</ChromaticText>
					</Link>
					<Link href='#exp' className={`${styles['navbar-link']}`}>
						<ChromaticText isActive={activeSection === 2}>Exp</ChromaticText>
					</Link>
					<Link href='#skills' className={`${styles['navbar-link']}`}>
						<ChromaticText isActive={activeSection === 3}>Skills</ChromaticText>
					</Link>
					<Link href='#projects' className={`${styles['navbar-link']}`}>
						<ChromaticText isActive={activeSection === 4}>
							Projects
						</ChromaticText>
					</Link>
					<Link href='#contact' className={`${styles['navbar-link']}`}>
						<ChromaticText isActive={activeSection === 5}>
							Contact
						</ChromaticText>
					</Link>
				</div>
			</div>
		</nav>
	);
}
