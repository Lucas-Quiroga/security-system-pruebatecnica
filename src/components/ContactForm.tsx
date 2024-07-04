"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/contactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubtmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles["contact__title"]}>Contacto</h2>
      {submitted ? (
        <p className={styles["contact__message"]}>
          Gracias por tu mensaje, te responderé a la brevedad.
        </p>
      ) : (
        <form className={styles["contact__form"]} onSubmit={handleSubtmit}>
          <div className={styles["contact__form-group"]}>
            <label htmlFor="name" className={styles["contact__form-label"]}>
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles["contact__form-input"]}
              value={formData.name}
              onChange={handleChange}
              autoFocus
            />
            <label htmlFor="email" className={styles["contact__form-label"]}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles["contact__form-input"]}
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message" className={styles["contact__form-label"]}>
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className={styles["contact__form-textarea"]}
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className={styles["contact__form-button"]}>
              Enviar
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
