"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock } from "react-icons/fa"; // Ícones de segurança
import styles from "../styles/components/compra.module.css";

const CompraSegura = () => {
  return (
    // ID corrigido: de "#compraSegura" para "compraSegura"
    <section id="compraSegura" className={styles.compraSegura}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="/images/homem-sentado.png" alt="Cliente realizando compra segura online" className={styles.img} />
        </motion.div>

        <motion.div 
          className={styles.infosContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título alterado para h2 para melhor semântica */}
          <h2 className={styles.title}>
            Sua compra é <span className={styles.span}>100% segura</span>
          </h2>
          <p className={styles.description}>
            Utilizamos as melhores tecnologias do mercado para garantir que todos os seus dados estejam protegidos do início ao fim.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FaLock />
              </div>
              <div className={styles.featureText}>
                <h3>Criptografia SSL</h3>
                <p>Seus dados são transmitidos de forma criptografada, garantindo total privacidade e proteção nas suas compras.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <div className={styles.featureText}>
                <h3>Conformidade LGPD</h3>
                <p>Seguimos à risca a Lei Geral de Proteção de Dados, usando suas informações com total responsabilidade.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompraSegura;