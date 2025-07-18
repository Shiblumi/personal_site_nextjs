'use client';

import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import { useRef, useEffect, useState } from 'react';

export default function SplineScene() {
	const { activeSection } = useNavbarContext();

	const videoRefs = useRef([]);

	// Set background video to currently viewed section
	useEffect(() => {
		videoRefs.current.forEach((video, index) => {
			if (video) {
				if (index + 1 === activeSection) {
					video.play();
				} else {
					video.pause();
				}
			}
		});
	}, [activeSection]);

	return (
		<div className='spline-container'>
			{[1, 2, 3].map((sectionNum, index) => (
				<video
					className={`fullscreen-video ${
						activeSection === index + 1 ? 'visible' : ''
					}`}
					key={sectionNum}
					// Store each ref at its index
					ref={(e) => (videoRefs.current[index] = e)}
					// TODO: Provide fallbacks (i.e. mp4)
					src={`/backgrounds/section${sectionNum}.webm`}
					autoPlay={activeSection === index + 1}
					loop
					muted
					playsInline
					
				/>
			))}
		</div>
	);
}
