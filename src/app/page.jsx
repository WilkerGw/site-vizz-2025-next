"use client";
import React from "react";
import Header from "../components/Header"; // Certifique-se de que Header é exportado como default
import Hero from "../components/Hero"; // Certifique-se de que Hero é exportado como default
import Features from "../components/Features"; // Certifique-se de que Features é exportado como default
import Footer from "../components/Footer"; // Certifique-se de que Footer é exportado como default
import "../styles/animations.css"; // Importa animações globais
import Contact from "@components/Contact";
import Compra from "@components/Compra";
import WhatsApp from "@components/WhatsApp";
import Gallery from "@components/Gallery";
import CustomerReviews from "@components/CustomerReviews";
import BlueLightFilter from "@components/BlueLightFilter";
import ImageCompare from "@components/ImageCompare";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <Features />
      <Compra />
      <Gallery/>
      <ImageCompare/>
      <BlueLightFilter/>
      <Contact />
      <WhatsApp />
      <CustomerReviews/>
      <Footer />
    </div>
  );
}
