import React from "react";
import styles from "../styles/components/compra.module.css";

const CompraSegura = () => {
  return (
    <section id="#compraSegura" className={styles.compraSegura}>
      <div className={styles.infosContainer}>
        <h1 className={styles.title}>
          Suas compras são <span className={styles.span}>100% seguras!</span>
        </h1>
        <p className={styles.text}>
          Nossa loja usa tecnologia SSL para proteger seus dados com criptografia, garantindo privacidade nas compras. Também seguimos a LGPD, usando suas informações com responsabilidade e apenas para fins específicos, sem compartilhamento sem autorização. Comprar aqui é rápido, fácil e seguro.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/homem-sentado.png" alt="" className={styles.img} />
      </div>
    </section>
  );
};

export default CompraSegura;
