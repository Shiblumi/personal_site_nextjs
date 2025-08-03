import SkillsBox from '../SkillBox/SkillsBox';
import TextBox from '@/components/TextBox/TextBox';
import styles from './Skills.module.css';

export default function Skills() {
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
		<div className={`${styles['skills-page-container']}`}>
			<TextBox maxWidth='65%' minWidth='500px' delay='0.45' />
			<div className={`${styles['skills-showcase']}`}>
				<SkillsBox title='Frontend' logos={frontendSkills} delay='0.3' />
				<SkillsBox title='Backend' logos={backendSkills} delay='0.45' />
				<SkillsBox title='General' logos={generalSkills} delay='0.6' />
				<SkillsBox title='Learning...' logos={learningSkills} delay='0.75' />
			</div>
		</div>
	);
}
