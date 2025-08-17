import SkillsBox from '../../UI/SkillsBox/SkillsBox';
import TextBox from '@/components/UI/TextBox/TextBox';
import styles from './Skills.module.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Skills() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: false,
		amount: 0.75,
	});
	const frontendSkills = [
		{ src: '/images/logos/react-icon.svg', name: 'React' },
		{ src: '/images/logos/framer-motion-logo.svg', name: 'Motion' },
		{ src: '/images/logos/javascript-logo.svg', name: 'JavaScript' },
		{ src: '/images/logos/html-logo.svg', name: 'HTML' },
		{ src: '/images/logos/CSS3-logo.svg', name: 'CSS' },
	];

	const backendSkills = [
		{ src: '/images/logos/nextjs-logo.svg', name: 'NextJS' },
		{ src: '/images/logos/expressjs-logo.svg', name: 'ExpressJS' },
		{ src: '/images/logos/pydantic-logo.png', name: 'PydanticAI' },
		{ src: '/images/logos/node-logo.svg', name: 'NodeJS' },
		{ src: '/images/logos/sql-generic-logo.svg', name: 'SQL' },
	];

	const generalSkills = [
		{ src: '/images/logos/python-logo.svg', name: 'Python' },
		{ src: '/images/logos/cpp-logo.svg', name: 'C++' },
		{ src: '/images/logos/spline-logo.png', name: 'Spline3D' },
	];

	const learningSkills = [
		{ src: '/images/logos/tailwind-css-logo.svg', name: 'Tailwind' },
		{ src: '/images/logos/typescript-logo.svg', name: 'TypeScript' },
	];

	return (
		<div ref={sectionRef} className={`${styles['skills-page-container']}`}>
			<TextBox
				styles={{
					width: '100%',
					display: 'flex',
					gap: '0px',
					flexDirection: 'column',
					paddingBottom: '0px',
				}}
				delay='0.3'
			>
				<h1>Skills</h1>
				<div
					style={{
						overflowY: 'auto',
						scrollBehavior: 'smooth',
						scrollbarColor: 'rgba(var(--primary-rgb), 0.3) transparent',
						scrollbarWidth: 'thin',
						mask: `linear-gradient(
							to bottom,
							transparent 0%,
							rgb(0, 0, 0) clamp(5%, 1vh, 8%),
							rgb(0, 0, 0) clamp(92%, 3vh, 95%),
							transparent 100%
						)`,
						padding: '8px 8px 16px 0px',
					}}
				>
					<p>
						Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
						yardarm. Pinnace holystone mizzenmast quarter crows nest nipperkin
						grog yardarm hempen halter furl. Swab barque interloper chantey
						doubloon starboard grog black jack gangway rutters. Deadlights jack
						lad schooner scallywag dance the hempen jig carouser broadside cable
						strike colors. Bring a spring upon her cable holystone blow the man
						down spanker Shiver me timbers to go on account lookout wherry
						doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm
						spyglass sheet transom heave to.
					</p>
				</div>
			</TextBox>
			<div className={`${styles['skills-showcase']}`}>
				<SkillsBox title='Frontend' logos={frontendSkills} delay='0.3' isInView={isInView} />
				<SkillsBox title='Backend' logos={backendSkills} delay='0.45' isInView={isInView} />
				<SkillsBox title='General' logos={generalSkills} delay='0.6' isInView={isInView} />
				<SkillsBox title='Learning...' logos={learningSkills} delay='0.75' isInView={isInView} />
			</div>
		</div>
	);
}
