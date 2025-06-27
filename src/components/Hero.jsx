import React from "react";
import styles from "../styles/components/hero.module.css";
import Faixa from "./Faixa";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaCalendarAlt,
  FaShoppingCart,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.containerLogo}>
        <img src="/images/logo.png" alt="Logo Óticas Vizz" className={styles.logoHero} />
      </div>

      <div className={styles.containerInfos}>
        <h1 className={styles.title}>
          PREÇO <span className={styles.span}>JUSTO</span> E QUALIDADE{" "}
          <span className={styles.span}>GARANTIDA</span>
        </h1>

        <div className={styles.socialContainer}>
          <p>Nos siga nas redes sociais:</p>
          <div className={styles.socialLinks}>
            <Link href="https://www.instagram.com/oticasvizz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.socialIcon} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61565492837095" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className={styles.socialIcon} />
            </Link>
            <Link href="https://wa.me/551123628799" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className={styles.socialIcon} />
            </Link>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <a
            href="https://agendamento-online-front.vercel.app/"
            className={`${styles.btn} ${styles.btnPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCalendarAlt />
            <div className={styles.btnTextContainer}>
              <span>Agende seu exame gratuito</span>
              <small>Vagas LIMITADAS!</small>
            </div>
          </a>

          <a
            href="https://oticasvizz.lojavirtualnuvem.com.br/"
            className={`${styles.btn} ${styles.btnSecondary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShoppingCart />
            <div className={styles.btnTextContainer}>
              <span>Visite nossa <span className={styles.span}>Loja Virtual</span></span>
              <small>Compre online</small>
            </div>
          </a>
        </div>
      </div>

      <Faixa />
    </section>
  );
};

export default Hero;