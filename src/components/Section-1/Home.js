import styles from "@/components/Section-1/Home.module.css";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import ActionButton from "../Buttons/ActionButton";
import Image from "next/image";

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
          class="full-dropshadow"
          routeTo="exp"
          sectionNum={1}
          fadeIn={true}
          animDelay={"0.95s"}
          animDuration={"1.5s"}
        />
        <Image
          src="/images/down-arrow.svg"
          alt="Learn More Arrow"
          width={36}
          height={36}
          style={{
            filter: "invert(1)",
            marginLeft: "-65px",
            marginTop: "4.5px",
          }}
        />
      </div>
    </div>
  );
}
