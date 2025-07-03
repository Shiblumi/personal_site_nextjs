"use client";

import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import Spline from "@splinetool/react-spline";
import { useRef, useEffect, useState } from "react";

export default function SplineScene() {
  const { activeSection } = useNavbarContext();
  const [isLoading, setIsLoading] = useState(true);
  
  // Store ref to Spline scene to interact with Spline API
  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
    
    // Preload all Spline scenes by quickly cycling through each on startup
    const preloadScenes = async () => {
      setIsLoading(true);
      console.log("SPLINE: Preloading scenes...");
      
      for (let i = 1; i <= 5; i++) {
        await new Promise(resolve => {
          splineApp.setVariables({ "active-section": i });
          setTimeout(resolve, 100);
        });
      }
      
      splineApp.setVariables({ "active-section": activeSection });
      setIsLoading(false);
      console.log("SPLINE: All scenes preloaded");
    };
    
    preloadScenes();
  }

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
      <Spline
        scene="https://prod.spline.design/Dx46uoO3jyBI1dej/scene.splinecode"
        onLoad={onLoad}
      />
      {isLoading && (
        <div className="loading-screen">
          Placeholder Loading
        </div>
      )}
    </div>
  );
}