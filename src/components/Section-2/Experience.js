import styles from "./Experience.module.css";
import { motion } from "motion/react";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

export default function Experience(props) {
  const { activeSection } = useNavbarContext();
  const shouldAnimate = activeSection === 2;
  const dotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className={`${styles["exp-container"]}`}>
      <div className={styles["exp-bar-container"]}>
        <motion.div
          className={styles["exp-bar"]}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: shouldAnimate ? 1 : 0,
          }}
          transition={{
            duration: shouldAnimate ? 2.5 : 0,
            delay: shouldAnimate ? 0.3 : 0,
            ease: "easeInOut",
          }}
          style={{
            originX: 0,
          }}
        />
        <motion.div
          className={`${styles["exp-bar-date-line"]}`}
          style={{
            "--position-left": "25%",
          }}
        />
        <motion.div
          className={`${styles["exp-bar-date-line"]}`}
          style={{
            "--position-left": "50%",
          }}
        />
        <motion.div
          className={`${styles["exp-bar-date-line"]}`}
          style={{
            "--position-left": "75%",
          }}
        />

        {/* <motion.div className={`${styles["checkpoint"]}`} /> */}

        <motion.div
          className={`${styles["exp-bar-trailing-dots"]}`}
          variants={dotVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{
            duration: shouldAnimate ? 0.2 : 0,
            delay: shouldAnimate ? 2.8 : 0,
            ease: "easeOut",
          }}
        />
        <motion.div
          className={`${styles["exp-bar-trailing-dots"]}`}
          variants={dotVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{
            duration: shouldAnimate ? 0.2 : 0,
            delay: shouldAnimate ? 3.0 : 0,
            ease: "easeOut",
          }}
        />
        <motion.div
          className={`${styles["exp-bar-trailing-dots"]}`}
          variants={dotVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{
            duration: shouldAnimate ? 0.2 : 0,
            delay: shouldAnimate ? 3.2 : 0,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}
