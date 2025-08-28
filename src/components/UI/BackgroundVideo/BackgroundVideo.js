'use client';

import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import { useRef, useEffect, useState } from 'react';
import styles from './BackgroundVideo.module.css';

const sectionToVideoMap = [1, 2, 3, 3, 4];
const videoNumbers = [1, 2, 3, 4];

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
	const imageRefs = useRef([]);
	const [playingVideo, setPlayingVideo] = useState(null);
	const [activeImage, setActiveImage] = useState(null);
	const isMobile = useInitialViewport();

	// Set background video/image to currently viewed section.
	useEffect(() => {
		if (isMobile === null) return;

		const targetNumber = sectionToVideoMap[activeSection - 1];
		
		if (isMobile) {
			// Handle images for mobile.
			imageRefs.current.forEach((image, index) => {
				if (image) {
					const currentNumber = videoNumbers[index];
					if (currentNumber === targetNumber) {
						setActiveImage(currentNumber);
					}
				}
			});
		} else {
			// Handle videos for desktop.
			videoRefs.current.forEach((video, index) => {
				if (video) {
					const currentVideoNumber = videoNumbers[index];
					if (currentVideoNumber === targetNumber) {
						video.play().catch(error => {
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
			{isMobile ? (
				// Render images for mobile.
				videoNumbers.map((imageNum, index) => (
					<div
						className={`${styles['fullscreen-image']} ${
							activeImage === imageNum ? styles['visible'] : ''
						}`}
						key={`stills-BG${imageNum}`}
						ref={(e) => (imageRefs.current[index] = e)}
						style={{
							backgroundImage: `url(/backgrounds/stills/BG${imageNum}.jpg)`,
						}}
					/>
				))
			) : (
				// Render videos for desktop.
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
						preload="auto"
					/>
				))
			)}
		</div>
	);
}