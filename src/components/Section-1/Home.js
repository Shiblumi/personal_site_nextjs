import styles from "@/components/Section-1/Home.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import ActionButton from "@/components/Buttons/ActionButton";
import DownArrow from "@/components/Icons/DownArrow";
export default function Home(props) {
  const { activeSection } = useNavbarContext();

  return (
    <div className={styles["home-container"]}>
      <div className={styles["name-wrapper"]}>
        <span
          className={`${styles["dirk"]} full-dropshadow ${
            activeSection === 1 ? styles.animate : ""
          }`}
        >
          <span className={styles["di"]}>DI</span>RK
        </span>
        <br />
        <span
          className={`${styles["wilson"]} full-dropshadow ${
            activeSection === 1 ? styles.animate : ""
          }`}
        >
          <span className={styles["wi"]}>WI</span>LSON
        </span>
      </div>
      <div className={styles["buttons-wrapper"]}>
        <ActionButton
          text="Contact"
          class="glass-dark-primary"
          routeTo="contact"
          sectionNum={1}
          fadeIn={true}
          animDelay={"0.7s"}
          animDuration={"1.5s"}
        />
        <ActionButton
          text="Learn More"
          class="full-dropshadow-hoverable"
          routeTo="exp"
          sectionNum={1}
          fadeIn={true}
          animDelay={"0.95s"}
          animDuration={"1.5s"}
          icon={DownArrow}
        />
      </div>
    </div>
  );
}
