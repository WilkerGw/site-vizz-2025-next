import React from "react";
import styles from "../styles/components/hero.module.css";
import Faixa from "./Faixa";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} fade-in`}>
      <div className={styles.filter}></div>
      <div className={styles.containerLogo}>
        <img src="/images/logo.png" alt="" className={styles.logoHero} />
      </div>
      <div className={styles.containerInfos}>
        <h1 className={styles.title}>
          MELHOR <span className={styles.span}>PREÇO</span> E{" "}
          <span className={styles.span}>QUALIDADE</span>
        </h1>
        <p>Nos siga nas redes sociais: </p>
        <div className={styles.contatos}>
          <div className={styles.contato}>
            <Link
              href={"https://www.instagram.com/oticasvizz/ "}
              target="_blank"
            >
              <img
                src="./images/instaIcon.png"
                alt="Instagram"
                className={styles.redeImg}
              />
            </Link>
          </div>
          <div className={styles.contato}>
            <Link
              href={"https://www.facebook.com/profile.php?id=61565492837095 "}
              target="_blank"
            >
              <img
                src="./images/faceIcon.png"
                alt="Facebook"
                className={styles.redeImg}
              />
            </Link>
          </div>
          <div className={styles.contato}>
            <Link href={"https://wa.me/551123628799 "} target="_blank">
              <img
                src="./images/whatsIcon.png"
                alt="WhatsApp"
                className={styles.redeImg}
              />
            </Link>
          </div>
        </div>
        <p>
          Agende seu{" "}
          <span className={styles.span}>exame de vista gratuito</span>
        </p>
        <a
          href="https://agendamento-online-front.vercel.app/"
          className={styles.linkBtn}
          target="_blank"
        >
          <button className={styles.btn}>
            {" "}
            <img src="./images/agenda.png" alt="" className={styles.btnIcon} />
            Agendar
          </button>
        </a>
        <p>
          Vagas <span className={styles.span}>LIMITADAS!</span>
        </p>
        <div className={styles.lojaVirtualContainer}>
          <p>
            Visite a nossa <span className={styles.span}>Loja Virtual</span>
          </p>
          <a
            href="https://oticasvizz.lojavirtualnuvem.com.br/"
            className={styles.linkBtn}
            target="_blank"
          >
            <button className={styles.btn}>
              <img
                src="./images/carrinho.png"
                alt=""
                className={styles.btnIcon}
              />
              COMPRAR
            </button>
          </a>
        </div>
      </div>
      <Faixa />
    </section>
  );
};

export default Hero;
