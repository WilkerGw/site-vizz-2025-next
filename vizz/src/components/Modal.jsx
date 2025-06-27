import React, { useState } from 'react';
import styles from '../styles/components/Modal.module.css'; // Mude para o novo arquivo de estilo
import { FaTimes } from 'react-icons/fa';

const Modal = ({ product, onClose }) => {
  // O estado agora é inicializado com a imagem principal do produto
  const [currentImage, setCurrentImage] = useState(product.mainImage);

  if (!product) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className={styles.galleryContainer}>
          <div className={styles.mainImageContainer}>
            <img src={currentImage} alt={product.name} className={styles.mainImage} />
          </div>
          <div className={styles.thumbnailContainer}>
            {product.extraImages.map((img, index) => (
              <div 
                key={index} 
                className={`${styles.thumbnail} ${img === currentImage ? styles.active : ''}`}
                onClick={() => setCurrentImage(img)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productDescription}>
            Descrição de exemplo para o produto. Adicione aqui mais detalhes sobre o material, dimensões e estilo do {product.name}.
          </p>
          <div className={styles.priceContainer}>
            <p className={styles.price}>De: {product.price}</p>
            <p className={styles.promoPrice}>Por: {product.promoPrice}</p>
          </div>
          <button className={styles.buyButton}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;