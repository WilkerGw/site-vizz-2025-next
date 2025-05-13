"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/components/features.module.css";

const Features = () => {
  return (
    <section id="servicos" className={styles.features}>
      <div className={styles.services}>
        {[
          {
            title: "Exame de Vista",
            highlight: "Gratuito",
            description:
              "Cuidamos da sua saúde ocular com precisão, usando o que há de mais moderno em aparelhos optométricos. E sem custo!",
            image: "/images/equipamento.png",
          },
          {
            title: "Fabricação de Óculos de Grau",
            highlight: "Personalizados",
            description:
              "Criamos óculos sob medida para você! Escolha a armação perfeita e conte com lentes adaptadas às suas necessidades.",
            image: "/images/oculos2.png",
          },
          {
            title: "Consultoria com",
            highlight: "Especialistas",
            description:
              "Agende uma consulta com um profissional Optometrista. Nossa equipe está pronta para te ajudar a escolher o melhor óculos para o seu estilo e conforto, garantindo qualidade e bem-estar.",
            image: "/images/opto.png",
          },
          {
            title: "Trabalhamos com as",
            highlight: "Melhores Marcas do Mercado",
            images: [
              "/images/parceiros/hb.png",
              "/images/parceiros/hoya.png",
              "/images/parceiros/varilux-logo-0.png",
              "/images/parceiros/zeiss.png",
            ],
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className={styles.service}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.serviceInfo}>
              <h1>
                {service.title}{" "}
                <span className={styles.span}>{service.highlight}</span>
              </h1>
              <p className={styles.description}>{service.description}</p>
            </div>
            <img src={service.image} alt="" className={styles.image} />
            {service.images && (
              <div className={styles.imageGallery}>
                {service.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Imagem ${imgIndex + 1}`}
                    className={styles.imageRede}
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

export default Features; // Exportação padrão
