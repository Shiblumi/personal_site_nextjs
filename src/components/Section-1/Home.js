import styles from "@/components/Section-1/Home.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import ActionButton from "../Buttons/ActionButton";

export default function Home(props) {
  const { activeSection } = useNavbarContext();

  return (
    <div className={styles["home-container"]}>
      <div className={styles["name-wrapper"]}>
        <span className={`${styles["dirk"]} full-dropshadow ${(activeSection === 1) ? styles.animate : ""}`}>
          <span className={styles["di"]}>DI</span>RK
        </span>
        <br />
        <span className={`${styles["wilson"]} full-dropshadow ${(activeSection === 1) ? styles.animate : ""}`}>
          <span className={styles["wi"]}>WI</span>LSON
        </span>
      </div>
      <div className={styles["buttons-wrapper"]}>
        <ActionButton text="Contact" class="glass-dark-primary"/>
        <ActionButton text="Learn More" class="full-dropshadow"/>
      </div>
    </div>
  );
}
