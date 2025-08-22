'use client';

import styles from './page.module.css';
import { useEffect } from 'react';
import { useNavbarContext } from '@/components/UI/ActiveSectionContext';

// Components import
import BackgroundVideo from '@/components/UI/BackgroundVideo';
import ScrollingTimeline from '@/components/UI/ScrollingTimeline/ScrollingTimeline';
import Footer from '@/components/UI/Footer/Footer';

// Sections import
import Home from '@/components/Sections/Section-1/Home';
import Experience from '@/components/Sections/Section-2/Experience';
import Skills from '@/components/Sections/Section-3/Skills';
import Projects from '@/components/Sections/Section-4/Projects';

export default function Page() {
	const { setActiveSection } = useNavbarContext();
	// const scrollWrapperRef = useRef(null);

	useEffect(() => {
		// Spline takes an int for identifying scenes.
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
			<ScrollingTimeline />
			<div className={styles['background-scene']}>
				<BackgroundVideo />
			</div>
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
					<h1>Section 5</h1>
				</section>
				<Footer />
			</div>
		</main>
	);
}
