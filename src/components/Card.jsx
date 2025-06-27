import React from 'react';
import styles from '../styles/components/Card.module.css'; // Mude para o novo arquivo de estilo
import { FaSearchPlus } from 'react-icons/fa';

const Card = ({ name, mainImage, price, promoPrice, onCardClick }) => {
  return (
    // Agora o clique é no card inteiro para abrir o modal
    <div className={styles.card} onClick={onCardClick}>
      <div className={styles.imageContainer}>
        <img
          src={mainImage}
          alt={name}
          className={styles.mainImage}
        />
        <div className={styles.overlay}>
          <FaSearchPlus className={styles.icon} />
          <span>Ver Detalhes</span>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.cardName}>{name}</h3>
        <div className={styles.priceContainer}>
          <p className={styles.price}>De: {price}</p>
          <p className={styles.promoPrice}>Por: {promoPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;