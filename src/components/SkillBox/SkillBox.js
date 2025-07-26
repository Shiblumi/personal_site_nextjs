import styles from './SkillBox.module.css';
import Image from 'next/image';

export default function SkillBox({ title, logos = [] }) {
	return (
		<div className={`${styles['skills-box']} glass-dark-soft-no-gradient`}>
			<span className={`${styles['box-title']}`}>{title}</span>
			<div className={`${styles['vertical-line']}`} />

			{logos.map((logo, index) => (
				<div
					key={`${index}-logo`}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						gap: '3px',
						height: '100%',
					}}
				>
					<Image
						src={logo.src}
						alt={logo.name || `${title} skill ${index + 1}`}
						width={40}
						height={40}
						style={{ objectFit: 'contain', userSelect: 'none' }}
					/>
					<span>{logo.name}</span>
				</div>
			))}
		</div>
	);
}
