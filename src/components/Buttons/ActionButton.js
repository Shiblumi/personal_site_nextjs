import styles from "./ActionButton.module.css"
export default function ActionButton(props) {

    return(
        <button type="button" className={`${styles["action-button"]} ${props.class}`}>
            {props.text}
        </button>
    )
}