import React, { useState } from 'react';
import styles from '../styles/components/gallery.module.css';

const Card = ({ name, mainImage, extraImages, price, promoPrice, onMainImageClick }) => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div className={styles.card}>
      <img
        src={currentImage}
        alt={name}
        className={styles.mainImage}
        onClick={onMainImageClick}
      />
      <h3 className={styles.cardName}>{name}</h3>
      <div className={styles.priceContainer}>
        <p className={styles.price}><span>De: </span>{price}</p>
        <p className={styles.promoPrice}><span>Por: </span>{promoPrice}</p>
      </div>
    </div>
  );
};

export default Card;