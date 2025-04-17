import React from 'react';
import styles from '../styles/components/hero.module.css';
import Faixa from './Faixa';

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} fade-in`}>
      <div className={styles.containerLogo}>
        <img src="/images/logo.png" alt="" className={styles.logoHero} />
      </div>
      <div className={styles.containerInfos}>
        <h2>O MELHOR <span className={styles.span}>PREÇO</span> E <span className={styles.span}>QUALIDADE</span> DA REGIÃO</h2>
        <p>Faça um orçamento e <span className={styles.span}>NÃO JOGUE DINHEIRO FORA</span>.</p>
        <a href="#agendamento" className={styles.linkBtn}><button className={styles.btn}>Agende sua Consulta</button></a>
      </div>
      <Faixa/>
    </section>
  );
};

export default Hero; // Exportação padrão