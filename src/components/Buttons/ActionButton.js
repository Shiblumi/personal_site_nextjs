import styles from "./ActionButton.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

export default function ActionButton(props) {
  const { activeSection } = useNavbarContext();
  const shouldAnimate = (props.sectionNum === activeSection) & props.fadeIn;
  const animationDelay = props.animDelay || "0.2s";
  const animationDuration = props.animDuration || "1.5s";
  const animationStyle = shouldAnimate
    ? {
        animation: `${styles.fadeInText} ${animationDuration} ease-out forwards`,
        animationDelay: animationDelay,
      }
    : {};

  return (
    <button
      type="button"
      className={`${styles["action-button"]} ${props.class}`}
      style={animationStyle}
      onClick={() => {
        if (props.routeTo) {
          // Scroll to passed-in sectionID.
          document.getElementById(props.routeTo).scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      {props.text}
      {props.icon && props.icon}
    </button>
  );
}
