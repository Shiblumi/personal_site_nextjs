import styles from './ProjectGallery.module.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectGallery({
	delay = '0.3',
	projects,
	onProjectSelect,
	selectedProject,
}) {
	const projectGalleryVariants = {
		hidden: { opacity: 0, transition: { duration: 0 } },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: Number(delay),
				ease: 'easeOut',
				staggerChildren: 0.12,
				delayChildren: Number(delay) + 0.1,
			},
		},
	};

	const galleryItemVariants = {
		hidden: { opacity: 0, y: 10, transition: { duration: 0 } },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const handleProjectClick = (project) => {
		if (onProjectSelect) {
			onProjectSelect(project);
		}
	};

	return (
		<motion.div
			className={`${styles['project-gallery-container']} glass-dark-soft-no-gradient`}
		>
			<h1 style={{ color: 'var(--color-secondary' }}>Projects</h1>
			<motion.div
				className={`${styles['project-gallery-grid']}`}
				variants={projectGalleryVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: false,
					amount: 0.5,
				}}
			>
				{projects.map((project) => (
					<motion.button
						className={`${styles['project-gallery-item']} ${
							selectedProject?.id === project.id
								? 'glass-dark-primary'
								: 'glass-dark-soft-no-gradient'
						}`}
						variants={galleryItemVariants}
						key={project.id}
						// whileHover='hover'
						onClick={() => handleProjectClick(project)}
					>
						<h3>{project.title}</h3>
					</motion.button>
				))}
			</motion.div>
		</motion.div>
	);
}
