"use client";
import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import styles from '../styles/components/imageCompare.module.css';
import { motion } from 'framer-motion';
// 1. Importando o ícone do WhatsApp
import { FaWhatsapp } from 'react-icons/fa';

const ImageCompare = () => {
  return (
    <section className={styles.imageCompareSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          A Mágica das Lentes <span className={styles.span}>Fotossensíveis</span>
        </h2>
        <p className={styles.subtitle}>
          Arraste a linha e veja como as lentes se adaptam à luz, escurecendo em ambientes externos e clareando nos internos.
        </p>
        <div className={styles.sliderContainer}>
          <ImgComparisonSlider>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              slot="first" 
              src="/images/antes.png" 
              // Texto alt da primeira imagem alterado
              alt="Lente fotossensível em ambiente interno (clara)" 
              className={styles.img}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              slot="second" 
              src="/images/depois.png" 
              // Texto alt da segunda imagem alterado
              alt="Lente fotossensível em ambiente externo (escura)" 
              className={styles.img}
            />
            <img 
              slot="first" 
              src="/images/antes-mobile.png" 
              // Texto alt da primeira imagem alterado
              alt="Lente fotossensível em ambiente interno (clara)" 
              className={styles.imgMobile}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              slot="second" 
              src="/images/depois-mobile.png" 
              // Texto alt da segunda imagem alterado
              alt="Lente fotossensível em ambiente externo (escura)" 
              className={styles.imgMobile}
            />
          </ImgComparisonSlider>
        </div>

        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>
            Gostou do que viu? Transforme sua experiência visual hoje mesmo.
          </p>
          <a
            href="https://wa.me/551123628799" // Link para o WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <FaWhatsapp size={20} />
            Faça um Orçamento
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ImageCompare;