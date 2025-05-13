"use client";
import React, { useRef } from "react";
import styles from "../styles/components/testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Barbara Caroline",
      comment:
        "Amei a ótica, fácil acesso e com ampla variedade. Parabéns pelo atendimento e paciência em cada detalhe. Qualidade muito boa, recomendo e irei comprar novamente. Obrigada.",
    },
    {
      name: "Felipe T Marin",
      comment: "Ótimo atendimento e com boa variedade de produtos. Recomendo!",
    },
    {
      name: "Camila Cardoso",
      comment:
        "Super indico a loja! Ótimo atendimento, atenciosos, explicam tudo perfeitamente e o melhor, ótimos preços em relação ao mercado. Voltarei com toda certeza!",
    },
    {
      name: "Rafael Santos",
      comment:
        "Super indico, os meninos me explicaram tudo sobre as lentes do meu óculos. Sem falar as Armações são lindas, e muito acessível. Com certeza irei fazer todos meus óculos com a oticas vizz! Parabéns meninos, continuem assim ",
    },
    {
      name: "Bruna Santos",
      comment:
        "Super indico a Óticas Vizz, atendimento sensacional. Adquiri dois óculos, e estou amando a qualidade. Com certeza vou indicar para meus familiares e amigos.",
    },
    {
      name: "Paulo R Brandão",
      comment:
        "A loja tem produtos excelentes e o atendimento é ótimo!! Recomendo dmais!!",
    },
    {
      name: "Rafael Souza",
      comment: "Profissionais super amigáveis e atenciosos.",
    },
    {
      name: "Elem Fiuza",
      comment:
        "Atendimento nota 10. Fui pra comprar um óculos acabei saindo com dois kkkkk Eu amei.",
    },
    {
      name: "Gabriel Ferreira",
      comment:
        "Super indico a Ótica, um excelente atendimento produtos de qualidades. Melhor Ótica da Região!",
    },
    {
      name: "Wilker Martins",
      comment:
        "Melhor atendimento da cidade! Produtos de ótimas qualidade e modernos. Loja aconchegante e bonita!",
    },
  ];

  const containerRef = useRef(null);

  const startMarquee = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running";
    }
  };

  const pauseMarquee = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "paused";
    }
  };

  return (
    <section id="depoimentos" className={styles.testimonials}>
      <div className={styles.testimonialsInfos}>
        <h2 className={styles.galleryTitle}>
          O Que Nossos <span className={styles.spanTestm}>Clientes Dizem</span>
        </h2>
        <p className={styles.subtitle}>
          Confira os depoimentos de quem já experimentou nossos serviços.
        </p>
      </div>
      <div className={styles.container__testimonials}>
        <div className={styles.container__testimonials}>
          <div
            className={styles.marquee}
            ref={containerRef}
            onMouseEnter={pauseMarquee}
            onMouseLeave={startMarquee}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.cardName}>{testimonial.name}</h3>
                </div>
                <div className={styles.testmonialContainer}>
                  <p className={styles.cardComment}>{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.convite}>Venha conhecer a nossa loja voçê também!</p>
    </section>
  );
};

export default Testimonials;
