import SkillBox from '../SkillBox/SkillBox';
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

	return (
		<div className={`${styles['skills-container']}`}>
			<div className={`${styles['skills-showcase']}`}>
				<SkillBox title='Frontend' logos={frontendSkills} />
				<SkillBox title='Backend' logos={backendSkills} />
				<SkillBox title='General' logos={generalSkills}/>
			</div>
		</div>
	);
}
