"use client";
import React, { useState } from "react";
import styles from "../styles/components/contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.contatoInfos}>
        <h2 className={styles.contactTitle}>
          Entre em <span className={styles.span}>Contato</span>
        </h2>
        <p className={styles.contactSubtitle}>
          Fique à vontade para entrar em contato conosco.
        </p>
        <div className={styles.contactContent}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.contatoMaps}>
        <h1 className={styles.mapsTitle}>
          Nossa <span className={styles.span}>Localização</span>
        </h1>
        <p className={styles.mapsSubtitle}>
          Av. Do Oratório, 4869, Vila Industrial, SP.
        </p>
        <div className={styles.mapContainer}>
          <iframe
            className={styles.mapIframe}
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d116993.37814058634!2d-46.6101910862598!3d-23.6027883597688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce5d0dedc7ec5d%3A0xb59f5577f9728b75!2sAv.%20do%20Orat%C3%B3rio%2C%204869%20-%20Jardim%20Guairaca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003221-200!3m2!1d-23.6028101!2d-46.5277895!5e0!3m2!1spt-BR!2sbr!4v1742826408619!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
