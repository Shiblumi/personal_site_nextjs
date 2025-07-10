"use client";

import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

export default function SplineScene() {
  const { activeSection } = useNavbarContext();
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // Store ref to Spline scene to interact with Spline API
  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
    
    // Preload all Spline scenes by quickly cycling through each on startup
    const preloadScenes = async () => {
      setIsLoading(true);
      console.log("SPLINE: Preloading scenes...");
      
      for (let i = 2; i <= 5; i++) {
        await new Promise(resolve => {
          splineApp.setVariables({ "active-section": i });
          setTimeout(resolve, 100);
        });
      }
      
      if (activeSection > 1) {
        splineApp.setVariables({ "active-section": activeSection });
      } else {
        splineApp.setVariables({ "active-section": 0 });
      }
      setIsLoading(false);
      console.log("SPLINE: All scenes preloaded");
    };
    
    preloadScenes();
  }

  // TODO: Account for multiple scenes, both 3D and video.
  useEffect(() => {
    if (videoRef.current) {
      if (activeSection === 1) {
        videoRef.current.play().catch(e => console.error("Video playback scene-1 failed:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [activeSection]);

  // Set spline scene to currently viewed section
  useEffect(() => {
    if (spline.current && !isLoading) {
      console.log(`SplineScene: Changing to scene ${activeSection}`);
      spline.current.setVariables({
        "active-section": activeSection,
      });
    }
  }, [activeSection, isLoading]);

  return (
    <div className="spline-container">
      <video 
        ref={videoRef}
        className={`fullscreen-video ${activeSection === 1 ? 'visible' : ''}`}
        src="/backgrounds/squares_top_view.webm"
        autoPlay={activeSection === 1}
        loop
        muted
        playsInline
      />

      {/* <Spline
        scene="https://prod.spline.design/Dx46uoO3jyBI1dej/scene.splinecode"
        onLoad={onLoad}
      />
      {isLoading && (
        <div className="loading-screen">
          Placeholder Loading
        </div>
      )} */}
    </div>
  );
}