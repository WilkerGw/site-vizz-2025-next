"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaTools, FaUserMd } from "react-icons/fa"; // Ícones que vamos usar
import styles from "../styles/components/features.module.css";

// Dados dos serviços agora com ícones
const servicesData = [
  {
    icon: <FaEye />,
    title: "Exame de Vista",
    highlight: "Gratuito",
    description:
      "Cuidamos da sua saúde ocular com precisão, usando o que há de mais moderno em aparelhos optométricos.",
  },
  {
    icon: <FaTools />,
    title: "Óculos de Grau",
    highlight: "Personalizados",
    description:
      "Criamos óculos sob medida para você! Escolha a armação perfeita e conte com lentes adaptadas às suas necessidades.",
  },
  {
    icon: <FaUserMd />,
    title: "Consultoria com",
    highlight: "Especialistas",
    description:
      "Nossa equipe de Optometristas está pronta para te ajudar a escolher o melhor óculos para seu estilo e conforto.",
  },
  {
    title: "Trabalhamos com as",
    highlight: "Melhores Marcas",
    // Este card não terá ícone nem descrição, apenas a galeria de logos
    images: [
      "/images/parceiros/hb.png",
      "/images/parceiros/hoya.png",
      "/images/parceiros/varilux-logo-0.png",
      "/images/parceiros/zeiss.png",
    ],
  },
];

const Features = () => {
  return (
    <section id="servicos" className={styles.features}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Soluções Completas para sua Visão
      </motion.h2>
      
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Renderiza o ícone se ele existir */}
            {service.icon && <div className={styles.cardIcon}>{service.icon}</div>}
            
            <h3 className={styles.cardTitle}>
              {service.title}{" "}
              <span className={styles.span}>{service.highlight}</span>
            </h3>

            {/* Renderiza a descrição se ela existir */}
            {service.description && (
              <p className={styles.cardDescription}>{service.description}</p>
            )}

            {/* Renderiza a galeria de imagens se ela existir */}
            {service.images && (
              <div className={styles.logoGallery}>
                {service.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Logo parceiro ${imgIndex + 1}`}
                    className={styles.partnerLogo}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;