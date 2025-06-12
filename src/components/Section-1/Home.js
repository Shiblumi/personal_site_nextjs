import styles from "@/components/Section-1/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles["parent-container"]}>
      <div className={styles["name-container"]}>
        <span className={styles.dirk}>
          <span className={styles.di}>DI</span>RK
        </span>
        <br />
        <span className={styles.wilson}>
          <span className={styles.wi}>WI</span>LSON
        </span>
      </div>
    </div>
    // style={{paddingTop: "20vh", paddingLeft: "10vw"}}
  );
}
