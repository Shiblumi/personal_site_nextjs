import styles from "@/components/Section-1/Home.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";

export default function Home(props) {
  const { activeSection } = useNavbarContext();

  return (
    <div className={styles["parent-container"]}>
      <div className={styles["name-container"]}>
        <span className={`${styles["dirk"]} full-dropshadow ${(activeSection === 1) ? styles.animate : ""}`}>
          <span className={styles["di"]}>DI</span>RK
        </span>
        <br />
        <span className={`${styles["wilson"]} full-dropshadow ${(activeSection === 1) ? styles.animate : ""}`}>
          <span className={styles["wi"]}>WI</span>LSON
        </span>
      </div>
    </div>
  );
}
