import React from "react";
import styles from "../styles/components/whatsapp.module.css";

const WhatsApp = () => {
  return <button className={styles.whatsappButton}>
    <img src="/images/whatsapp.png" alt="Logo do WhatsApp" className={styles.whatsappLogo} />
  </button>;
};

export default WhatsApp;
