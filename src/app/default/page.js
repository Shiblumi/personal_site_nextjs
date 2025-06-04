"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useNavbarContext } from "@/components/Navbar/NavbarContext";
import Footer from "$/Footer/Footer"

export default function Home() {

  const { setActiveSection } = useNavbarContext();

  useEffect(() => {
    // Observe and track which scroll-section is visible within scroll-wrapper
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section ${entry.target.id} is visible`);
            setActiveSection(entry.target.id);
          }
          else {
            console.log(`Section ${entry.target.id} is no longer visible`);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    // Register all scroll-sections to observer
    const sections = document.querySelectorAll(`.${styles["scroll-section"]}`);
    sections.forEach((section) => observer.observe(section));

    // Cleanup on dismount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <main className={styles["main"]}>
      <div className={styles["scroll-wrapper"]}>
        <section id="section1" className={styles["scroll-section"]}>
          <h1>Section 1</h1>
        </section>
        <section id="section2" className={styles["scroll-section"]}>
          <h1>Section 2</h1>
        </section>
        <section id="section3" className={styles["scroll-section"]}>
          <h1>Section 3</h1>
        </section>
        <section id="section4" className={styles["scroll-section"]}>
          <h1>Section 4</h1>
        </section>
        <section id="section5" className={styles["scroll-section"]}>
          <h1>Section 5</h1>
        </section>
        <Footer/>
      </div>
    </main>
  );
}
