import React from "react";
import styles from "../styles/components/gallery.module.css";
import Faixa from "./Faixa";
const Gallery = () => {
  return (
    <section id="destaques" className={styles.destaques}>
      <h1 className={styles.destaqueTitle}>Compre <span className={styles.destSpan}>sem sair de casa</span></h1>
      <p className={styles.destaqueText}>Visite a loja virtual e confira mais modelos!</p>
      <div className={styles.banner}>
        <div className={styles.slider} style={{ "--quantity": 10 }}>
          <div className={styles.item} style={{ "--position": 1 }}>
            <img
              src="/images/destaques/glass1.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 2 }}>
            <img
              src="/images/destaques/glass2.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 3 }}>
            <img
              src="/images/destaques/glass9.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 4 }}>
            <img
              src="/images/destaques/glass4.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 5 }}>
            <img
              src="/images/destaques/glass5.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 6 }}>
            <img
              src="/images/destaques/glass6.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 7 }}>
            <img
              src="/images/destaques/glass7.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 8 }}>
            <img
              src="/images/destaques/glass8.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 9 }}>
            <img
              src="/images/destaques/glass3.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 10 }}>
            <img
              src="/images/destaques/glass10.png"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <img
        src="/images/mulher-oculos-solar.png"
        alt=""
        className={styles.logoDestaques}
      />
      <Faixa/>
    </section>
  );
};

export default Gallery;
