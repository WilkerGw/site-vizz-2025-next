import React, { useState } from 'react';
import styles from '../styles/components/gallery.module.css';

const Modal = ({ image, extraImages, onClose }) => {
  const [currentImage, setCurrentImage] = useState(image);

  const handleExtraImageClick = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={currentImage} alt="Expanded Image" className={styles.modalImage} />
        <div className={styles.extraImagesContainer}>
          {extraImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Extra Image ${index + 1}`}
              className={styles.extraImage}
              onClick={() => handleExtraImageClick(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;