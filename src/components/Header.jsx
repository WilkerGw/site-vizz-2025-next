"use client";

import Link from "next/link";
import styles from "../styles/components/header.module.css";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

// Separamos os links para um array, facilitando a manutenção
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#destaques", label: "Destaques" },
  { href: "#contato", label: "Contato" },
  { href: "/politicas", label: "Políticas" },
  { href: "/agendamento", label: "Agendamento"},
  { href: "https://oticasvizz.lojavirtualnuvem.com.br/", label: "Comprar", target: "_blank" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.filter}></div>
      <nav className={styles.nav} ref={menuRef}>
        <a href="#home">
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </a>

        {/* Links para Desktop */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.link} target={link.target} rel={link.target ? "noopener noreferrer" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botão Hamburger */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Abrir menu">
          {isOpen ? <IoClose size={24} color="#eee" /> : <IoMenu size={24} color="#eee" />}
        </button>

        {/* Menu Mobile */}
        <div
          className={`${styles.mobileNav} ${isOpen ? styles.show : ""}`}
          style={{ maxHeight: isOpen ? "500px" : "0px" }}
        >
          {navLinks.map((link) => (
             <Link key={link.label} href={link.href} className={styles.mobileLink} onClick={() => setIsOpen(false)} target={link.target} rel={link.target ? "noopener noreferrer" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;