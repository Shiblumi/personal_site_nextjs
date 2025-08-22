'use client';

import { useNavbarContext } from '@/components/UI/ActiveSectionContext';
import { useRef, useEffect, useState } from 'react';

const videos = ['BG1', 'BG2', 'BG3', 'BG4'];

const sectionVideoMapping = {
    1: 'BG1',
    2: 'BG2',
    3: 'BG3',
    4: 'BG3',
    5: 'BG4'
};

export default function BackgroundVideo() {
    const { activeSection } = useNavbarContext();
    const videoRefs = useRef({});
    const [playingVideo, setPlayingVideo] = useState(null);

    useEffect(() => {
        const targetVideo = sectionVideoMapping[activeSection];
        
        // Pause all videos
        Object.values(videoRefs.current).forEach(video => {
            if (video) video.pause();
        });
        
        // Play target video
        if (videoRefs.current[targetVideo]) {
            videoRefs.current[targetVideo].play();
            setPlayingVideo(targetVideo);
        }
    }, [activeSection]);

    return (
        <div className='spline-container'>
            {videos.map((videoName) => (
                <video
                    className={`fullscreen-video ${
                        playingVideo === videoName ? 'visible' : ''
                    }`}
                    key={videoName}
                    ref={(e) => (videoRefs.current[videoName] = e)}
                    src={`/backgrounds/${videoName}.webm`}
                    loop
                    muted
                    playsInline
                />
            ))}
        </div>
    );
}