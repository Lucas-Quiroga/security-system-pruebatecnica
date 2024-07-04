"use client";
import React from "react";
import styles from "../styles/interests.module.css";

const Interests: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <section
      data-testid="interests-section"
      className={`${styles.interests} ${
        isActive ? styles["interests--active"] : ""
      }`}
    >
      <h2 className={styles["interests__title"]}>Intereses</h2>
      <ul className={styles["interests__list"]}>
        <li className={styles["interests__list-item"]}>Desarrollo web</li>
        <li className={styles["interests__list-item"]}>Programación</li>
        <li className={styles["interests__list-item"]}>Gimnasio</li>
        <li className={styles["interests__list-item"]}>Algoritmos</li>
      </ul>
    </section>
  );
};

export default Interests;
