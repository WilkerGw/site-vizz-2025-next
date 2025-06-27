"use client";
import React from 'react';
import styles from '../styles/components/blueLightFilter.module.css';
import { motion } from 'framer-motion';
import { BiShieldQuarter } from 'react-icons/bi';
// 1. Importando o componente de comparação de imagem
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const BlueLightFilter = () => {
  return (
    <section className={styles.blueLightFilter}>
      <div className={styles.container}>
        {/* 2. O contêiner que antes era do vídeo agora é do slider */}
        <motion.div
          className={styles.sliderContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <ImgComparisonSlider>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              slot="first" 
              // Lembre-se de colocar sua imagem "sem filtro" aqui
              src="/images/sem-filtro.png" 
              alt="Visão normal sem filtro de luz azul" 
              className={styles.img}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              slot="second" 
              // Lembre-se de colocar sua imagem "com filtro" aqui
              src="/images/com-filtro.png" 
              alt="Visão com lentes com filtro de luz azul" 
              className={styles.img}
            />
          </ImgComparisonSlider>
        </motion.div>
        
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Proteja Seus Olhos com o Poder do <span className={styles.span}>Filtro Azul</span></h2>
          <div className={styles.iconAndText}>
            <BiShieldQuarter className={styles.icon} />
            <p className={styles.description}>
              A luz azul de telas digitais pode causar fadiga ocular, dores de cabeça e dificuldade para dormir.
            </p>
          </div>
          <div className={styles.iconAndText}>
            <BiShieldQuarter className={styles.icon} />
            <p className={styles.description}>
              As lentes com filtro de luz azul bloqueiam essa luz prejudicial, proporcionando maior conforto visual. Veja os benefícios:
            </p>
          </div>
          <ul className={styles.benefitsList}>
            <li><BiShieldQuarter className={styles.listItemIcon} /> Menos cansaço visual.</li>
            <li><BiShieldQuarter className={styles.listItemIcon} /> Redução de dores de cabeça.</li>
            <li><BiShieldQuarter className={styles.listItemIcon} /> Melhora na qualidade do sono.</li>
            <li><BiShieldQuarter className={styles.listItemIcon} /> Maior conforto ao usar eletrônicos.</li>
          </ul>
          <p className={styles.callToAction}>
            Invista no seu bem-estar visual. Fale com nossos especialistas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueLightFilter;