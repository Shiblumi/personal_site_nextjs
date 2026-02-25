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
						I began my journey as a university student participating in
						hackathons in teams of friends. Since then, I've had the
						opportunity to work on collaborative teams at companies such as
						SyncQ and C3 AI. At SyncQ, I developed new features and expanded
						integrations between CRM and accounting platforms while working
						directly with clients to understand their workflows and translate
						business requirements into technical solutions. At C3 AI, I
						contributed within their enterprise-level AI platform by evaluating
						core tools and overall platform reliability while building new
						features within their applications, deepening my
						understanding of large-scale systems and thoughtful platform design.
					</p>
				</div>
			</TextBox>
		</div>
	);
}
