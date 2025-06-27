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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Compra />
      <Gallery/>
      <Contact />
      <WhatsApp />
      <CustomerReviews/>
      <Footer />
    </>
  );
}
