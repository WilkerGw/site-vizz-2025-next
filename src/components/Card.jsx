import React, { useState } from 'react';
import styles from '../styles/components/gallery.module.css';

const Card = ({ name, mainImage, extraImages, onMainImageClick }) => {
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
    </div>
  );
};

export default Card;