"use client";

import Link from "next/link";
import styles from "../styles/components/header.module.css";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#servicos", label: "Serviços" },
    { href: "#destaques", label: "Destaques" },
    { href: "#contato", label: "Contato" },
    { href: "/politicas", label: "Políticas", external: false },
    { href: "https://agendamento-online-front.vercel.app/", label: "Agendamento", external: true },
    { href: "https://oticasvizz.lojavirtualnuvem.com.br/", label: "Comprar", external: true },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.filter}></div>

      <nav className={styles.nav} ref={menuRef}>
        <a href="#home">
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </a>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={styles.link}
              onClick={closeMenu}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <IoClose size={24} color="#eee" /> : <IoMenu size={24} color="#eee" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`${styles.mobileNav} ${isOpen ? styles.show : ""}`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }} // ajuste da animação
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={styles.mobileLink}
            onClick={closeMenu}
            target={link.external ? "_blank" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
