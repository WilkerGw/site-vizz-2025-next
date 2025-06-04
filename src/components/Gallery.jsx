import React, { useState } from 'react';
import styles from '../styles/components/gallery.module.css';
import Faixa from '../components/Faixa';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);

  const products = [
    {
      name: 'Vizz Clear',
      mainImage: '/images/grau/CLEAR/clear1.jpg',
      extraImages: ['/images/grau/CLEAR/clear1.jpg', '/images/grau/CLEAR/clear2.jpg', '/images/grau/CLEAR/clear3.jpg', '/images/grau/CLEAR/clear4.jpg'],
      price: 'R$ 129,99',
      promoPrice: 'R$ 99,99',
    },
    {
      name: 'Vizz Clear',
      mainImage: '/images/grau/CLEAR-GRAFITE/clear5.jpg',
      extraImages: ['/images/grau/CLEAR-GRAFITE/clear6.jpg', '/images/grau/CLEAR-GRAFITE/clear7.jpg', '/images/grau/CLEAR-GRAFITE/clear8.jpg', '/images/grau/CLEAR-GRAFITE/clear9.jpg'],
      price: 'R$ 129,99',
      promoPrice: 'R$ 99,99',
    },
    {
      name: 'Vizz Pollo',
      mainImage: '/images/grau/POLLO/pollo1.jpg',
      extraImages: ['/images/grau/POLLO/pollo1.jpg', '/images/grau/POLLO/pollo2.jpg', '/images/grau/POLLO/pollo3.jpg', '/images/grau/POLLO/pollo4.jpg'],
      price: 'R$ 129,99',
      promoPrice: 'R$ 99,99',
    },
    {
      name: 'Vizz Riley',
      mainImage: '/images/grau/RILEY/riley1.jpg',
      extraImages: ['/images/grau/RILEY/riley1.jpg', '/images/grau/RILEY/riley2.jpg', '/images/grau/RILEY/riley3.jpg', '/images/grau/RILEY/riley4.jpg'],
      price: 'R$ 129,99',
      promoPrice: 'R$ 99,99',
    },
    {
      name: 'Vizz Winter',
      mainImage: '/images/solar/WINTER/winter1.jpg',
      extraImages: ['/images/solar/WINTER/winter1.jpg', '/images/solar/WINTER/winter2.jpg', '/images/solar/WINTER/winter3.jpg', '/images/solar/WINTER/winter4.jpg'],
      price: 'R$ 199,99',
      promoPrice: 'R$ 149,99',
    },
    {
      name: 'Vizz Seiva',
      mainImage: '/images/solar/SEIVA/seiva1.jpg',
      extraImages: ['/images/solar/SEIVA/seiva1.jpg', '/images/solar/SEIVA/seiva2.jpg', '/images/solar/SEIVA/seiva3.jpg', '/images/solar/SEIVA/seiva4.jpg'],
      price: 'R$ 199,99',
      promoPrice: 'R$ 149,99',
    },
    {
      name: 'Vizz Swamp',
      mainImage: '/images/solar/SWAMP/swamp1.jpg',
      extraImages: ['/images/solar/SWAMP/swamp1.jpg', '/images/solar/SWAMP/swamp2.jpg', '/images/solar/SWAMP/swamp3.jpg', '/images/solar/SWAMP/swamp4.jpg'],
      price: 'R$ 199,99',
      promoPrice: 'R$ 149,99',
    },
    {
      name: 'Vizz Osaka',
      mainImage: '/images/solar/OSAKA/osaka1.png',
      extraImages: ['/images/solar/OSAKA/osaka1.png', '/images/solar/OSAKA/osaka2.png', '/images/solar/OSAKA/osaka3.png', '/images/solar/OSAKA/osaka4.png'],
      price: 'R$ 219,99',
      promoPrice: 'R$ 169,99',
    },
  ];

  const handleMainImageClick = (image, extras) => {
    setSelectedImage(image);
    setExtraImages(extras);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setExtraImages([]);
  };

  return (
    <section id="destaques" className={styles.destaques}>
      <Faixa />
      <div className={styles.cardsContainer}>
        {products.map((product, index) => (
          <Card
            key={index}
            name={product.name}
            mainImage={product.mainImage}
            extraImages={product.extraImages}
            price={product.price}
            promoPrice={product.promoPrice}
            onMainImageClick={() => handleMainImageClick(product.mainImage, product.extraImages)}
          />
        ))}
      </div>
      {selectedImage && <Modal image={selectedImage} extraImages={extraImages} onClose={handleCloseModal} />}
    </section>
  );
};

export default Gallery;