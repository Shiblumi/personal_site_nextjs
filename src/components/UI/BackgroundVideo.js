'use client';

import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import { useRef, useEffect, useState } from 'react';

const sectionToVideoMap = [1, 2, 3, 3, 4];
const videoNumbers = [1, 2, 3, 4];

export default function BackgroundVideo() {
	const { activeSection } = useNavbarContext();
	const videoRefs = useRef([]);
	const [playingVideo, setPlayingVideo] = useState(null);

	// Set background video to currently viewed section.
	useEffect(() => {
		const targetVideoNumber = sectionToVideoMap[activeSection - 1];
		
		videoRefs.current.forEach((video, index) => {
			if (video) {
				const currentVideoNumber = videoNumbers[index];
				if (currentVideoNumber === targetVideoNumber) {
					video.play();
					setPlayingVideo(currentVideoNumber);
				} else {
					video.pause();
				}
			}
		});
	}, [activeSection, playingVideo]);

	return (
		<div className='spline-container'>
			{videoNumbers.map((VideoNum, index) => (
				<video
					className={`fullscreen-video ${
						playingVideo === VideoNum ? 'visible' : ''
					}`}
					key={'BG' + VideoNum}
					// Reference each video by its index.
					ref={(e) => (videoRefs.current[index] = e)}
					// TODO: Provide fallbacks (i.e. mp4).
					src={`/backgrounds/BG${VideoNum}.webm`}
					autoPlay={sectionToVideoMap[activeSection - 1] === VideoNum}
					loop
					muted
					playsInline
				/>
			))}
		</div>
	);
}