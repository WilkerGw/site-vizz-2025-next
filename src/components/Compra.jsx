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
          Na nossa loja, protegemos seus dados com tecnologia SSL, que
          criptografa todas as informações enviadas durante a compra (como dados
          pessoais e de pagamento). É como ter um "cadeado digital" que garante
          a privacidade das suas transações. Além disso, seguimos rigorosamente
          a LGPD (Lei Geral de Proteção de Dados), cuidando das suas informações
          com responsabilidade e transparência. Seus dados só serão usados para
          finalidades específicas e nunca serão compartilhados sem sua
          autorização. Comprar aqui é rápido, fácil e totalmente seguro!
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/homem-notebook.png" alt="" className={styles.img} />
      </div>
    </section>
  );
};

export default CompraSegura;
