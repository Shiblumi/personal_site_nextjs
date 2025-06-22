import styles from "./Experience.module.css";
import { motion } from "motion/react";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

export default function Experience(props) {
  const { activeSection } = useNavbarContext();
  const shouldAnimate = activeSection === 2;

  return (
    <div className={`${styles["exp-container"]}`}>
      <div className={styles["progress-bar-container"]}>
        <motion.div
          className={styles["progress-bar"]}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: shouldAnimate ? 1 : 0,
          }}
          transition={{
            duration: shouldAnimate ? 2 : 0,
            delay: shouldAnimate ? 0.3 : 0,
            ease: "easeOut",
          }}
          style={{
            originX: 0,
          }}
        />
      </div>
    </div>
  );
}
