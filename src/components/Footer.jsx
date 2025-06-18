import React from 'react';
import styles from '../styles/components/footer.module.css';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Coluna 1: Logo e Sobre */}
          <div className={styles.footerColumn}>
            <img
              src="/images/logo.png"
              alt="Logo Óticas Vizz"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Cuidando da sua visão com tecnologia, estilo e um preço justo.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="#home">Início</Link></li>
              <li><Link href="#servicos">Serviços</Link></li>
              <li><Link href="#destaques">Destaques</Link></li>
              <li><Link href="#contato">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Redes Sociais */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <p>Av. Do Oratório, 4869</p>
            <p>Vila Industrial, São Paulo - SP</p>
            <p>(11) 2362-8799</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/oticasvizz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565492837095" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/551123628799" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyrightBar}>
          <p>&copy; {new Date().getFullYear()} Ótica Vizz. Todos os direitos reservados.</p>
          <div className={styles.devContainer}>
            <Link href="/politicas" className={styles.link} target="_blank">
              Política de Privacidade
            </Link>
            <span className={styles.separator}>|</span>
            <a href="https://github.com/wilker-martins" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Desenvolvido por <strong>Wilker Martins</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;