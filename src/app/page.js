"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import Footer from "$/Footer/Footer";
import SplineScene from "@/components/Scenes/SplineScene";

export default function Home() {
  const { setActiveSection } = useNavbarContext();

  const sectionNameID = {
    "Home": 1,
    "Exp": 2,
    "Skills": 3,
    "Projects": 4,
    "Contact": 5,
  }

  useEffect(() => {
    // Callback for observer; called each time a new section comes into view.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let sceneNum = sectionNameID[entry.target.id];
            console.log(`page: Setting active scene to ${sceneNum}`);
            setActiveSection(sceneNum);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    // Register all scroll-sections to observer.
    const sections = document.querySelectorAll(`.${styles["scroll-section"]}`);
    sections.forEach((section) => observer.observe(section));

    // Cleanup on dismount.
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <main className={styles["main"]}>
      <div className={styles["background-scene"]}>
        <SplineScene />
      </div>
      <div className={styles["scroll-wrapper"]}>
        <section id="Home" className={styles["scroll-section"]}>
          <h1>Section 1</h1>
        </section>
        <section id="Exp" className={styles["scroll-section"]}>
          <h1>Section 2</h1>
        </section>
        <section id="Skills" className={styles["scroll-section"]}>
          <h1>Section 3</h1>
        </section>
        <section id="Projects" className={styles["scroll-section"]}>
          <h1>Section 4</h1>
        </section>
        <section id="Contact" className={styles["scroll-section"]}>
          <h1>Section 5</h1>
        </section>
        <Footer />
      </div>
    </main>
  );
}
