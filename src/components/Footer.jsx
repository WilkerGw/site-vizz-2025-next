import React from "react";
import styles from "../styles/components/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <img
              src="/images/logo.png"
              alt="logo vizz"
              className={styles.logo}
            />
            <p className={styles.footerText}>Av Do Oratório, 4869</p>
            <p className={styles.footerText}>
              Vila Industrial, São Paulo - SP, 03221-200
            </p>
            <p className={styles.footerText}>Telefone: (11) 2362-8799</p>
            <p className={styles.footerText}>Email: oticasvizz@gmail.com</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p className={styles.texto}>
            &copy; 2025 Ótica Vizz. Todos os direitos reservados. |{" "}
            <Link href="/politicas" className={styles.link} target="_blank">
              Política de Privacidade |{" "}
            </Link>
            <Link href={"https://github.com/wilker-martins"} target="_blank" className={styles.link}>
              <span className={styles.dev}>
                 Desenvolvido por <strong>Wilker Martins</strong>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exportação padrão
