import { useEffect, useState } from "react";
import styles from "./DynamicText.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

const roles = ["Full Stack Developer", "A.I. Integrator", "3D Artist", "Video Editor", "Photographer", "Gaming Enthusiast",];
const FADE_DURATION = 300;
const CYCLE_INTERVAL = 3000;

export default function DynamicText(props) {
  const [index, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const { activeSection } = useNavbarContext();
  const shouldFadeIn = activeSection === 1;
  const fadeDelay = props.fadeDelay * 1000; // Convert to ms

  useEffect(() => {
    if (!shouldFadeIn) {
      // Reset to first role when leaving section
      setIndex(0);
      return;
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
    }, fadeDelay);

    // Define clean up for timeout() and interval() references
    return () => {
      clearTimeout(startCycling);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [shouldFadeIn, fadeDelay]);

  return (
    <div
      className={`${styles["dynamic-text-wrapper"]} ${
        shouldFadeIn ? "fade-in" : ""
      }`}
      style={{
        "--fade-delay": props.fadeDelay || "0.6s",
        "--fade-duration": "1.5s",
      }}
    >
      <span
        className={`${styles["dynamic-text"]} full-dropshadow ${
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
