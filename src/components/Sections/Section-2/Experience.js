import styles from './Experience.module.css';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TextBox from '@/components/UI/TextBox/TextBox';
import ExpBar from '@/components/UI/ExperienceBar/ExpBar';

export default function Experience(props) {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: false,
		amount: 0.75,
	});

	return (
		<div ref={sectionRef} className={`${styles['experience-container']}`}>
			<ExpBar isInView={isInView} />
			<TextBox
				styles={{
					width: '100%',
					maxWidth: '1000px',
					padding: '0px',
					display: 'flex',
					flexDirection: 'column',
					gap: '0px',
				}}
				opacity={0.3}
				delay='0.65'
				sectionNum={2}
			>
				<h2
					style={{
						padding: 'clamp(8px, 2vh, 16px) 0 0 clamp(24px, 2vw, 32px)',
					}}
				>
					Experience
				</h2>
				<div
					style={{
						overflowY: 'auto',
						scrollBehavior: 'smooth',
						scrollbarColor: 'rgba(var(--secondary-rgb), 0.3) transparent',
						scrollbarWidth: 'thin',
						mask: `linear-gradient(
							to bottom,
							transparent 0%,
							rgb(0, 0, 0) clamp(5%, 1vh, 8%),
							rgb(0, 0, 0) clamp(92%, 3vh, 95%),
							transparent 100%
						)`,
						padding:
							'clamp(8px, 1vh, 24px) clamp(24px, 2vw, 32px) clamp(8px, 1vh, 24px) clamp(24px, 2vw, 32px)',
						margin: '0 clamp(8px, 2vw, 16px) clamp(8px, 1vh, 16px) 0',
					}}
				>
					<p style={{ textIndent: '1em' }}>
						My journey as a developer has taken me as a university student doing
						zero-sleep hackathons and personal projects, to working at SyncQ to
						develop new features and interacting directly with clients. At
						SyncQ, I've had the chance to work on exciting projects like
						developing an AI chatbot and expanding our integration to new
						platforms to reach more users. Outside of professional projects, I
						enjoy creating 3D animated visuals, combining an artistic eye with a
						technical mindset.
					</p>
				</div>
			</TextBox>
		</div>
	);
}