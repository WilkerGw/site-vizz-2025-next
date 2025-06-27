import React from "react";
import styles from "../styles/components/whatsapp.module.css";

const WhatsApp = () => {
  return <button className={styles.whatsappButton}>
    <a href="https://wa.me/551123628799" target="_blank"><img src="/images/whatsapp.png" alt="Logo do WhatsApp" className={styles.whatsappLogo} /></a>
  </button>;
};

export default WhatsApp;
