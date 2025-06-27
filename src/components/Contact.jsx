"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
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
    // Aqui você integraria com um serviço de e-mail como EmailJS, Formspree ou um backend próprio.
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! (Simulação)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.infoColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Nossa <span className={styles.span}>Localização</span></h2>
          <div className={styles.contactDetail}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Av. Do Oratório, 4869, Vila Industrial, São Paulo - SP</p>
          </div>
          <div className={styles.contactDetail}>
            <FaPhone className={styles.icon} />
            <p>(11) 2362-8799</p>
          </div>
           <div className={styles.contactDetail}>
            <FaEnvelope className={styles.icon} />
            <p>contato@oticasvizz.com.br</p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.842228945605!2d-46.5204285237286!3d-23.60975686447285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c08f4675e69%3A0x6842738d8b673255!2sAv.%20do%20Orat%C3%B3rio%2C%204869%20-%20Vila%20Industrial%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003221-300!5e0!3m2!1spt-BR!2sbr!4v1718679998818!5m2!1spt-BR!2sbr"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div 
          className={styles.formColumn}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Mande uma <span className={styles.span}>Mensagem</span></h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Nome</label>
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
              <label htmlFor="email" className={styles.formLabel}>Email</label>
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
              <label htmlFor="message" className={styles.formLabel}>Sua mensagem</label>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;