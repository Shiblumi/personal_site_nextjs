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
		initial: { opacity: 0, scale: 0.98 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 1.02 },
	};

	return (
		<div className={`${styles['projects-page-container']}`}>
			<TextBox width='100%' delay='0.3'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={selectedProject.id}
						variants={contentVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{ duration: 0.3 }}
					>
						<h2 style={{ color: 'var(--color-primary)' }}>
							{selectedProject.title}
						</h2>
						<p>
							<strong>Role:</strong> {selectedProject.role}
						</p>
						<p>
							<strong>Date:</strong> {selectedProject.date}
						</p>
						<strong>Skills:</strong>
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
						<p>{selectedProject.description}</p>
					</motion.div>
				</AnimatePresence>
			</TextBox>
			<ProjectGallery
				onProjectSelect={handleProjectSelect}
				selectedProject={selectedProject}
				projects={projectsData}
			/>
		</div>
	);
}
