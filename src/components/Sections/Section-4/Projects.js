import TextBox from '@/components/UI/TextBox/TextBox';
import styles from './Projects.module.css';
import ProjectGallery from '@/components/UI/ProjectGallery/ProjectGallery';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { projectsData } from './ProjectGalleryItems';

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(projectsData[0]);

	const handleProjectSelect = (project) => {
		setSelectedProject(project);
	};

	const contentVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<div className={`${styles['projects-page-container']}`}>
			{/* Project information */}
			<AnimatePresence mode='wait'>
				<TextBox width='100%' delay='0.3'>
					{/* TODO: Move this motion.div into TextBox. */}
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
						style={{ height: '100%', overflow: 'hidden' }}
					>
            {/* Title */}
						<h2 style={{ color: 'var(--color-primary)' }}>
							{selectedProject.title}
						</h2>
            {/* Role */}
						<p>
							<strong>Role:</strong> {selectedProject.role}
						</p>
            {/* Date */}
						<p>
							<strong>Date:</strong> {selectedProject.date}
						</p>
            {/* Tech Stack */}
						<strong>Tech Stack:</strong>
						<div
							style={{
								display: 'flex',
								gap: '8px',
								flexWrap: 'wrap',
							}}
						>
							{selectedProject.skills.map((skill, index) => (
								<span
									key={index}
									style={{
										padding: '4px 8px',
										backgroundColor: 'rgba(var(--primary-rgb), 0.2)',
										borderRadius: '4px',
										fontSize: '0.9em',
									}}
								>
									{skill}
								</span>
							))}
						</div>
						<div style={{ marginTop: '16px' }}></div>
						<div className={styles['description-container']}>
              {/* Description */}
							<p style={{ margin: 0, lineHeight: '1.6' }}>
								{selectedProject.description}
							</p>
						</div>
					</motion.div>
				</TextBox>
			</AnimatePresence>

			{/* Project Gallery */}
			<ProjectGallery
				onProjectSelect={handleProjectSelect}
				selectedProject={selectedProject}
				projects={projectsData}
			/>
		</div>
	);
}
