'use client';

import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import { useRef, useEffect, useState } from 'react';
import styles from './BackgroundVideo.module.css';
import Image from 'next/image';
import BG1 from '@/../public/backgrounds/stills/BG1.jpg';
import BG2 from '@/../public/backgrounds/stills/BG2.jpg';
import BG3 from '@/../public/backgrounds/stills/BG3.jpg';
import BG4 from '@/../public/backgrounds/stills/BG4.jpg';

const sectionToVideoMap = [1, 2, 3, 3, 4];
const videoNumbers = [1, 2, 3, 4];
const backgroundImages = [BG1, BG2, BG3, BG4];

// Check viewport resolution on initial mount.
function useInitialViewport() {
	const [isMobile, setIsMobile] = useState(null);

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	return isMobile;
}

export default function BackgroundVideo() {
	const { activeSection } = useNavbarContext();
	const videoRefs = useRef([]);
	const [playingVideo, setPlayingVideo] = useState(null);
	const [activeImage, setActiveImage] = useState(1);
	const isMobile = useInitialViewport();

	// Set background video/image to currently viewed section.
	useEffect(() => {
		if (isMobile === null) return;

		const targetNumber = sectionToVideoMap[activeSection - 1];

		if (isMobile) {
			setActiveImage(targetNumber);
		} else {
			// Handle videos for desktop.
			videoRefs.current.forEach((video, index) => {
				if (video) {
					const currentVideoNumber = videoNumbers[index];
					if (currentVideoNumber === targetNumber) {
						video.play().catch((error) => {
							console.log('Video play failed:', error);
						});
						setPlayingVideo(currentVideoNumber);
					} else {
						video.pause();
					}
				}
			});
		}
	}, [activeSection, isMobile]);

	// Don't render until viewport resolution is known.
	if (isMobile === null) {
		return null;
	}

	// TODO: Provide fallbacks (i.e. mp4).
	return (
		<div className={styles['fullscreen-video-container']}>
			{isMobile
				? // Render images for mobile.
				  videoNumbers.map((imageNum, index) => (
						<Image
							className={`${styles['fullscreen-image']} ${
								activeImage === imageNum ? styles['visible'] : ''
							}`}
							key={`stills-BG${imageNum}`}
							src={backgroundImages[index]}
							alt={`Background ${imageNum}`}
							fill
							sizes='100vw'
							quality={95}
							priority={imageNum === 1}
							loading={imageNum === 1 ? 'eager' : 'lazy'}
							placeholder='blur'
							style={{ objectFit: 'cover' }}
						/>
				  ))
				: // Render videos for desktop.
				  videoNumbers.map((videoNum, index) => (
						<video
							className={`${styles['fullscreen-video']} ${
								playingVideo === videoNum ? styles['visible'] : ''
							}`}
							key={`desktop-BG${videoNum}`}
							ref={(e) => (videoRefs.current[index] = e)}
							src={`/backgrounds/desktop/BG${videoNum}.webm`}
							loop
							muted
							playsInline
							preload='auto'
						/>
				  ))}
		</div>
	);
}
