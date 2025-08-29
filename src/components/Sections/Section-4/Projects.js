import TextBox from '@/components/UI/TextBox/TextBox';
import styles from './Projects.module.css';
import ProjectGallery from '@/components/UI/ProjectGallery/ProjectGallery';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projectsData, skillsLogoSrc } from './ProjectsMetadata';
import Image from 'next/image';

export default function Projects() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, {
		once: false,
		amount: 0.75,
	});
	const [selectedProject, setSelectedProject] = useState(projectsData[0]);

	const handleProjectSelect = (project) => {
		setSelectedProject(project);
	};

	const contentVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const skillLogoVariants = {
		hidden: { opacity: 0, translateX: 10, transition: { duration: 0.2 } },
		visible: {
			opacity: 1,
			translateX: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div ref={sectionRef} className={`${styles['projects-page-container']}`}>
			{/* Project information */}
			<AnimatePresence mode='wait'>
				<TextBox
					styles={{ width: '100%', lineHeight: '1.6', paddingRight: '1em' }}
					delay='0.3'
					opacity={0.25}
				>
					<motion.div
						key={selectedProject.id}
						variants={contentVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						layout
						transition={{
							ease: 'easeOut',
							duration: 0.5,
							layout: {
								duration: 0.2,
								ease: 'easeOut',
							},
						}}
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							overflow: 'hidden',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							{/* Title */}
							<h2 style={{ color: 'var(--color-primary)' }}>
								{selectedProject.title}
							</h2>
							{/* Github Link */}
							{selectedProject.link && (
								<a
									href={selectedProject.link}
									target='_blank'
									rel='noopener noreferrer'
									style={{
										color: 'var(--color-secondary)',
										fontWeight: 'bold',
										textDecoration: 'underline',
										textUnderlineOffset: '4px',
										fontSize: '1em',
										marginRight: 'clamp(0.5em, 2vw, 0.8em)',
									}}
								>
									<span>GitHub</span>
									<Image
										src='/images/link-box-icon.svg'
										alt='link icon'
										width={25}
										height={25}
										style={{
											display: 'inline-block',
											width: '0.7em',
											height: 'auto',
											marginLeft: '0.3em',
											verticalAlign: '0%',
										}}
									/>
								</a>
							)}
						</div>
						{/* Role */}
						<p>
							<strong>Role:</strong> {selectedProject.role}
						</p>
						{/* Date */}
						<p>
							<strong>Date:</strong> {selectedProject.date}
						</p>
						{/* Tech Stack */}
						<motion.div
							key={`tech-stack-${selectedProject.id}`}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {},
								visible: {
									transition: {
										staggerChildren: 0.1,
										delayChildren: 0.2,
									},
								},
							}}
							style={{
								display: 'flex',
								columnGap: '24px',
								rowGap: '12px',
								flexWrap: 'wrap',
								marginBottom: '4px',
							}}
						>
							{selectedProject.skills.length > 0 && (
								<strong>Tech Stack:</strong>
							)}
							{/* Tech Stack: Skill Logos */}
							{selectedProject.skills.map((skill, index) => (
								<motion.div
									key={`${selectedProject.id}-${skill}-${index}`}
									variants={skillLogoVariants}
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: 'clamp(6px, 1vw, 8px)',
										fontSize: '0.8em',
									}}
								>
									<Image
										src={skillsLogoSrc[skill]}
										alt={`${skill} logo`}
										width={40}
										height={40}
										style={{
											objectFit: 'contain',
											userSelect: 'none',
											width: 'clamp(18px, 2vw, 28px)',
											height: 'clamp(18px, 2vw, 30px)',
										}}
									/>
									<span>{skill}</span>
								</motion.div>
							))}
						</motion.div>
						{/* Description */}
						<div className={styles['description-container']}>
							<p
								style={{
									lineHeight: '1.6',
									paddingRight: '1em',
									whiteSpace: 'pre-wrap',
								}}
							>
								{selectedProject.description}
							</p>
							{selectedProject.keyPoints && (
								<>
									<span
										style={{
											display: 'block',
											margin: '2em 0 0.5em 0',
											fontWeight: 'bold',
										}}
									>
										Key Points:
									</span>
									<ul>
										{selectedProject.keyPoints.map((point, index) => (
											<li
												key={`ProjID-${selectedProject.id}-keyPoint-${index}`}
											>
												{point}
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					</motion.div>
				</TextBox>
			</AnimatePresence>

			{/* Project Gallery */}
			<ProjectGallery
				onProjectSelect={handleProjectSelect}
				selectedProject={selectedProject}
				projects={projectsData}
				isInView={isInView}
			/>
		</div>
	);
}
