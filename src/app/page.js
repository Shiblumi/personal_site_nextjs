'use client';

import styles from './page.module.css';
import { useEffect } from 'react';
import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import SplineScene from '@/components/Scenes/SplineScene';
import SectionTimeline from '@/components/SectionTimeline/SectionTimeline';
import Footer from '@/components/Footer/Footer';
import Home from '@/components/Section-1/Home';
import Experience from '@/components/Section-2/Experience';

export default function Page() {
	const { setActiveSection } = useNavbarContext();

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
			<SectionTimeline />
			<div className={styles['background-scene']}>
				<SplineScene />
			</div>
			<div className={styles['scroll-wrapper']}>
				<section id='home' className={styles['scroll-section']}>
					<div className='container'>
						<Home />
					</div>
				</section>
				<section id='exp' className={styles['scroll-section']}>
					<div className='container'>
						<Experience />
					</div>
				</section>
				<section id='skills' className={styles['scroll-section']}>
					<h1>Section 3</h1>
				</section>
				<section id='projects' className={styles['scroll-section']}>
					<h1>Section 4</h1>
				</section>
				<section id='contact' className={styles['scroll-section']}>
					<h1>Section 5</h1>
				</section>
				<Footer />
			</div>
		</main>
	);
}
