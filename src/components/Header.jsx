'use client';

import Link from 'next/link';
import styles from '../styles/components/header.module.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.filter}></div>
      <nav className={styles.nav}>
        <a href="#home"><img src="/images/logo.png" alt="" className={styles.logo} /></a>
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="#home" className={styles.link} onClick={closeMenu}>Home</Link>
          <Link href="#servicos" className={styles.link} onClick={closeMenu}>Servicos</Link>
          <Link href="#destaques" className={styles.link} onClick={closeMenu}>Destaques</Link>
          <Link href="#contato" className={styles.link} onClick={closeMenu}>Contato</Link>
          <Link href="https://agendamento-on-front.vercel.app/agendamento" className={styles.link} onClick={closeMenu} target='_blank'>Agendamento</Link>
          <Link href="https://oticasvizz.lojavirtualnuvem.com.br/" className={styles.link} onClick={closeMenu} target='_blank'>Comprar</Link>
          <Link href="#depoimentos" className={styles.link} onClick={closeMenu}>Depoimentos</Link>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        </button>
      </nav>
      {isOpen && (
        <div className={styles.mobileNav}>
          <Link href="#home" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
          <Link href="#servicos" className={styles.mobileLink} onClick={closeMenu}>Servicos</Link>
          <Link href="#destaques" className={styles.mobileLink} onClick={closeMenu}>Destaques</Link>
          <Link href="#contato" className={styles.mobileLink} onClick={closeMenu}>Contato</Link>
          <Link href="https://agendamento-on-front.vercel.app/agendamento" className={styles.mobileLink} onClick={closeMenu} target='_blank'>Agendamento</Link>
          <Link href="https://oticasvizz.lojavirtualnuvem.com.br/" className={styles.mobileLink} onClick={closeMenu} target='_blank'>Comprar</Link>
          <Link href="#depoimentos" className={styles.mobileLink} onClick={closeMenu}>Depoimentos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;