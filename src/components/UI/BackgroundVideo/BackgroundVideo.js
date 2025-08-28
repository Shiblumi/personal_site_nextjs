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
	const [playingVideo, setPlayingVideo] = useState(null);
	const isMobile = useInitialViewport();

	// Get video folder based on initial viewport resolution.
	const videoFolder = isMobile ? 'mobile' : 'desktop';

	// Set background video to currently viewed section.
	useEffect(() => {
		if (isMobile === null) return;

		const targetVideoNumber = sectionToVideoMap[activeSection - 1];
		
		videoRefs.current.forEach((video, index) => {
			if (video) {
				const currentVideoNumber = videoNumbers[index];
				if (currentVideoNumber === targetVideoNumber) {
					video.play().catch(error => {
						console.log('Video play failed:', error);
					});
					setPlayingVideo(currentVideoNumber);
				} else {
					video.pause();
				}
			}
		});
	}, [activeSection, isMobile]);

	// Don't render until viewport resolution is known.
	if (isMobile === null) {
		return null;
	}

	// TODO: Provide fallbacks (i.e. mp4).
	return (
		<div className={styles['fullscreen-video-container']}>
			{videoNumbers.map((videoNum, index) => (
				<video
					className={`${styles['fullscreen-video']} ${
						playingVideo === videoNum ? styles['visible'] : ''
					}`}
					key={`${videoFolder}-BG${videoNum}`}
					ref={(e) => (videoRefs.current[index] = e)}
					src={`/backgrounds/${videoFolder}/BG${videoNum}.webm`}
					loop
					muted
					playsInline
					preload="auto"
				/>
			))}
		</div>
	);
}