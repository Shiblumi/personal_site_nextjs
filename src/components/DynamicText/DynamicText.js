import { useEffect, useState } from "react";
import styles from "./DynamicText.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

const roles = ["Full Stack Developer", "A.I. Integrator", "3D Artist", "Video Editor", "Photographer", "Gaming Enthusiast",];
const FADE_DURATION = 300;
const CYCLE_INTERVAL = 3000;
const INITIAL_TIMEOUT_DELAY = 200;

export default function DynamicText(props) {
  const [index, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const { activeSection } = useNavbarContext();
  const shouldFadeIn = activeSection === 1;
  const fadeDelay = parseFloat(props.fadeDelay || "0.6s") * 1000;
  const cycleDelay = fadeDelay + INITIAL_TIMEOUT_DELAY;
  
  useEffect(() => {
    if (!shouldFadeIn) {
      // Reset to first role when leaving section
      setIndex(0);
      setVisible(false);
      return;
    }
    else {
        setVisible(true);
    }

    // (1) Timeout till section fade-in is complete
    // (2) Start interval for dynamic text
    // (3) Wait for fade-out, then change text and fade in
    let intervalId;
    const startCycling = setTimeout(() => { // (1)
      intervalId = setInterval(() => { // (2)
        setVisible(false);
        setTimeout(() => { // (3)
          setIndex((i) => (i + 1) % roles.length);
          setVisible(true);
        }, FADE_DURATION);
      }, CYCLE_INTERVAL);
    }, cycleDelay);

    // Define clean up for timeout() and interval() references
    return () => {
      clearTimeout(startCycling);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [shouldFadeIn, cycleDelay]);

  return (
    <div
      className={`${styles["dynamic-text-wrapper"]}`}
    >
      <span
        className={`${styles["dynamic-text"]} full-dropshadow-light ${
          isVisible ? styles["visible"] : styles["hidden"]
        }`}
        style={{
          "--fade-duration": `${FADE_DURATION}ms`,
        }}
      >
        {roles[index]}
      </span>
    </div>
  );
}
