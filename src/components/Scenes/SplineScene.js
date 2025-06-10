"use client";

import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import Spline from "@splinetool/react-spline";
import { useRef, useEffect} from "react";

export default function SplineScene() {
  const { activeSection } = useNavbarContext();

  // Store ref to Spline scene to interact with Spline API
  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  // Tell Spline API to change scene to 'activeSection'
  useEffect(() => {
    if (spline.current) {
      console.log(`SplineScene: Changing to scene ${activeSection}`);
      spline.current.setVariables({
        "active-section": activeSection,
      });
    }
  }, [activeSection]);

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/Dx46uoO3jyBI1dej/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
