import styles from "./ActionButton.module.css";
export default function ActionButton(props) {
  return (
    <button
      type="button"
      className={`${styles["action-button"]} ${props.class}`}
      onClick={() => {
        if (props.section) {
          // Scroll to passed-in sectionID.
          document.getElementById(props.section).scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      {props.text}
    </button>
  );
}
