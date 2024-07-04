import React from "react";
import styles from "../styles/about.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles["about__title"]}>Sobre mí</h2>
      <p className={styles["about__description"]}>
        Hola, soy Lucas Quiroga, desarrollador web. Me gusta aprender cosas
        nuevas y compartir conocimientos. Me apasiona la tecnología y la
        programación. Siempre estoy buscando nuevos desafíos y oportunidades
        para crecer.
      </p>
    </section>
  );
};

export default About;
