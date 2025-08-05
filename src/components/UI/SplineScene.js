'use client';

import { useNavbarContext } from '@/components/UI/NavbarContext';
import { useRef, useEffect, useState } from 'react';

export default function SplineScene() {
	const { activeSection } = useNavbarContext();
	const videoRefs = useRef([]);
	const [playingVideo, setPlayingVideo] = useState(null);


	// Set background video to currently viewed section.
	useEffect(() => {
		videoRefs.current.forEach((video, index) => {
			if (video) {
				// Special case for BG video 3.
				if (index + 1 === 3) {
					// If the active section is 3 or 4, play video 3.
					if (activeSection === 3 || activeSection === 4) {
						video.play();
						setPlayingVideo(index + 1);
					}
					else {
						video.pause();
					}
				// For all other videos, play if the section matches.
				} else {
					if (index + 1 === activeSection) {
						video.play();
						setPlayingVideo(index + 1);
					} else {
						video.pause();
					}
				}
			}
		});
	}, [activeSection, playingVideo]);

	return (
		<div className='spline-container'>
			{[1, 2, 3].map((VideoNum, index) => (
				<video
					className={`fullscreen-video ${
						playingVideo === VideoNum ? 'visible' : ''
					}`}
					key={'BG' + VideoNum}
					// Reference each video by its index.
					ref={(e) => (videoRefs.current[index] = e)}
					// TODO: Provide fallbacks (i.e. mp4).
					src={`/backgrounds/BG${VideoNum}.webm`}
					autoPlay={activeSection === index + 1}
					loop
					muted
					playsInline
				/>
			))}
		</div>
	);
}
