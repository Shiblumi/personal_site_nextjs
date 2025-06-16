import styles from "./ActionButton.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

export default function ActionButton(props) {
  const { activeSection } = useNavbarContext();
  const shouldFadeIn = (props.sectionNum === activeSection) && props.fadeIn;
  const fadeDelay = props.animDelay || "0.2s";
  const fadeDuration = props.animDuration || "1.5s";

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    ...(shouldFadeIn && {
      '--fade-delay': fadeDelay,
      '--fade-duration': fadeDuration,
    })
  };

  return (
    <button
      type="button"
      className={`${styles["action-button"]} ${props.class} ${shouldFadeIn ? 'fade-in' : ''}`}
      style={buttonStyle}
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
      {props.icon && <props.icon />}
    </button>
  );
}
