'use client';

import { useNavbarContext } from '@/components/Navbar/NavbarContext';
import Spline from '@splinetool/react-spline';
import { useRef, useEffect, useState } from 'react';

export default function SplineScene() {
	const { activeSection } = useNavbarContext();
	const [isLoading, setIsLoading] = useState(true);

	// Store ref to Spline scene to interact with Spline API
	const spline = useRef();
	const videoRefs = useRef([]);

	function onLoad(splineApp) {
		spline.current = splineApp;
		setIsLoading(false);

		// // Preload all Spline scenes by quickly cycling through each on startup
		// const preloadScenes = async () => {
		// 	setIsLoading(true);
		// 	console.log('SPLINE: Preloading scenes...');

		// 	for (let i = 2; i <= 5; i++) {
		// 		await new Promise((resolve) => {
		// 			splineApp.setVariables({ 'active-section': i });
		// 			setTimeout(resolve, 100);
		// 		});
		// 	}

		// 	if (activeSection > 1) {
		// 		splineApp.setVariables({ 'active-section': activeSection });
		// 	} else {
		// 		splineApp.setVariables({ 'active-section': 0 });
		// 	}
		// 	setIsLoading(false);
		// 	console.log('SPLINE: All scenes preloaded');
		// };

		// preloadScenes();
	}

	// Set spline scene (3D) to currently viewed section
	useEffect(() => {
		if (spline.current && !isLoading) {
			console.log(`SplineScene: Changing to scene ${activeSection}`);
			spline.current.setVariables({
				'active-section': activeSection,
			});
		}
	}, [activeSection, isLoading]);

	// Set spline scene (video) to currently viewed section
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

			<Spline
				scene='https://prod.spline.design/mqrGb6Ido6jOtwJJ/scene.splinecode'
				onLoad={onLoad}
				className={`fullscreen-video ${activeSection === 3 ? 'visible' : ''}`}
			/>
			{isLoading && <div className='loading-screen'>Placeholder Loading</div>}
		</div>
	);
}
