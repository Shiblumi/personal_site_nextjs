import styles from './ProjectGallery.module.css';
import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './ProjectGalleryItems';

export default function ProjectGallery({ width = '100%', delay = '0.3' }) {
	const projectGalleryVariants = {
		hidden: { opacity: 0, scale: 0.9, transition: { duration: 0 } },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				delay: Number(delay),
				ease: 'easeOut',
				staggerChildren: 0.11,
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
	return (
		<motion.div
			className={`${styles['project-gallery-container']} glass-dark-soft-no-gradient`}
			variants={projectGalleryVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{
				once: false,
				amount: 0.5,
			}}
			style={{ width: width }}
		>
			{projectsData.map((project) => (
				<motion.div
					className={`${styles['project-gallery-item']} glass-dark-soft`}
					key={project.id}
					variants={galleryItemVariants}
				>
					<h3>{project.title}</h3>
				</motion.div>
			))}
		</motion.div>
	);
}
