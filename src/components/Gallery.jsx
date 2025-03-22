import React from "react";
import styles from "../styles/components/gallery.module.css";
const Gallery = () => {
  return (
    <section id="destaques" className={styles.destaques}>
      <h1 className={styles.destaqueTitle}>Compre <span className={styles.destSpan}>sem sair de casa</span>!</h1>
      <p className={styles.destaqueText}>Visite a loja virtual e confira mais modelos!</p>
      <div className={styles.banner}>
        <div className={styles.slider} style={{ "--quantity": 10 }}>
          <div className={styles.item} style={{ "--position": 1 }}>
            <img
              src="/images/destaques/glass1.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 2 }}>
            <img
              src="/images/destaques/glass2.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 3 }}>
            <img
              src="/images/destaques/glass9.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 4 }}>
            <img
              src="/images/destaques/glass4.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 5 }}>
            <img
              src="/images/destaques/glass5.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 6 }}>
            <img
              src="/images/destaques/glass6.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 7 }}>
            <img
              src="/images/destaques/glass7.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 8 }}>
            <img
              src="/images/destaques/glass8.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 9 }}>
            <img
              src="/images/destaques/glass3.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.item} style={{ "--position": 10 }}>
            <img
              src="/images/destaques/glass10.jpg"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <img
        src="/images/logo-cinza.png"
        alt=""
        className={styles.logoDestaques}
      />
    </section>
  );
};

export default Gallery;
