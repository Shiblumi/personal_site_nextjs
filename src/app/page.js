'use client';

import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { useNavbarContext } from '@/components/UI/ActiveSectionContext';

// Sections import
import Home from '@/components/Sections/Section-1/Home';
import Experience from '@/components/Sections/Section-2/Experience';
import Skills from '@/components/Sections/Section-3/Skills';
import Projects from '@/components/Sections/Section-4/Projects';
import Contact from '@/components/Sections/Section-5/Contact';
import PopupNotification from '@/components/UI/PopupNotification/PopupNotification';

function useInitialViewport() {
	const [isMobile, setIsMobile] = useState(null);

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	return isMobile;
}

export default function Page() {
	const { setActiveSection } = useNavbarContext();
	const isMobile = useInitialViewport();

	useEffect(() => {
		const sectionNameID = {
			home: 1,
			exp: 2,
			skills: 3,
			projects: 4,
			contact: 5,
		};

		// Callback for observer; called each time a new section comes into view.
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						let sectionID = entry.target.id;
						let sceneNum = sectionNameID[sectionID];
						console.log(`page: Setting active scene to ${sceneNum}`);
						setActiveSection(sceneNum);
						/* Update URL without reloading the page (using history API). */
						window.history.replaceState(null, '', `/#${sectionID}`);
					}
				});
			},
			{
				threshold: 0.5,
				rootMargin: '0px',
			}
		);

		// Register all scroll-sections to observer.
		const sections = document.querySelectorAll(`.${styles['scroll-section']}`);
		sections.forEach((section) => observer.observe(section));

		// Cleanup on dismount.
		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, [setActiveSection]);

	return (
		<main className={styles['main']}>
			{isMobile && <PopupNotification duration={6} delay={2}>Mobile resolution detected. <br />Animated backgrounds will be disabled.</PopupNotification>}
			<div className={styles['scroll-wrapper']}>
				{/* Home */}
				<section id='home' className={styles['scroll-section']}>
					<Home />
				</section>

				{/* Experience */}
				<section id='exp' className={styles['scroll-section']}>
					<Experience />
				</section>

				{/* Skills */}
				<section id='skills' className={styles['scroll-section']}>
					<Skills />
				</section>

				{/* Projects */}
				<section id='projects' className={styles['scroll-section']}>
					<Projects />
				</section>

				{/* Contact */}
				<section id='contact' className={styles['scroll-section']}>
					<Contact />
				</section>
			</div>
		</main>
	);
}
