import { useEffect, useState } from "react";
import styles from "./DynamicText.module.css";

const roles = ["Full Stack Engineer", "3D Artist", "Gamer"];
const FADE_DURATION = 300;
const CYCLE_INTERVAL = 3000;

export default function DynamicText() {
  const [index, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, FADE_DURATION);
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles["dynamic-text-wrapper"]}`}>
      <span
        className={`${styles["dynamic-text"]} ${
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
