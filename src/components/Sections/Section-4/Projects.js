import TextBox from '@/components/UI/TextBox/TextBox';
import styles from './Projects.module.css';

export default function Projects({}) {
	return (
		<div className={`${styles['projects-page-container']}`}>
			<TextBox>
				<h2>Projects</h2>WAAAAH
			</TextBox>
			<TextBox style={{ border: '1px solid rgba(var(--secondary-rgb), 1)' }}>
				<h2>Projects</h2>WAAAAH
			</TextBox>
		</div>
	);
}
