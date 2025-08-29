import styles from './ProjectGallery.module.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectGallery({
	delay = '0.3',
	projects,
	onProjectSelect,
	selectedProject,
	isInView = false,
}) {
	// Container animation (whole component including header)
	const containerVariants = {
		hidden: {
			opacity: 0,
			scale: 0.95,
			transition: { duration: 0.2 },
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				delay: Number(delay),
				ease: 'easeOut',
			},
		},
	};

	// Grid animation (for staggered children)
	const projectGalleryVariants = {
		hidden: { opacity: 0, transition: { duration: 0.2 } },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				staggerChildren: 0.07,
				delayChildren: Number(delay) + 0.1,
			},
		},
	};

	// Gallery item animation (individual project buttons)
	const galleryItemVariants = {
		hidden: { opacity: 0, translateY: 10, transition: { duration: 0.2 } },
		visible: {
			opacity: 1,
			translateY: 0,
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
			variants={containerVariants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
		>
			<h1 style={{ color: 'var(--color-secondary)', lineHeight: '12px' }}>
				Projects
			</h1>
			<motion.div
				className={`${styles['project-gallery-grid']}`}
				variants={projectGalleryVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
			>
				{projects.map((project) => (
					<motion.button
						className={`${styles['project-gallery-item']} ${
							selectedProject?.id === project.id
								? 'glass-dark-primary-no-hover'
								: 'glass-dark-soft-no-gradient'
						}`}
						variants={galleryItemVariants}
						key={project.id}
						onClick={() => handleProjectClick(project)}
						whileTap={{
							scale: 0.98,
							transition: {
								duration: 0.1,
							},
						}}
					>
						<h3>{project.title}</h3>
					</motion.button>
				))}
			</motion.div>
		</motion.div>
	);
}
