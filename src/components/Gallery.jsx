import React, { useState } from 'react';
import styles from '../styles/components/gallery.module.css'; // Usando o arquivo de estilo atualizado
import Card from '../components/Card';
import Modal from '../components/Modal';

// Adicionando a propriedade 'category' aos seus produtos
const productsData = [
  { name: 'Vizz Clear', mainImage: '/images/grau/CLEAR/clear1.jpg', extraImages: ['/images/grau/CLEAR/clear1.jpg', '/images/grau/CLEAR/clear2.jpg', '/images/grau/CLEAR/clear3.jpg', '/images/grau/CLEAR/clear4.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Clear Grafite', mainImage: '/images/grau/CLEAR-GRAFITE/clear5.jpg', extraImages: ['/images/grau/CLEAR-GRAFITE/clear6.jpg', '/images/grau/CLEAR-GRAFITE/clear7.jpg', '/images/grau/CLEAR-GRAFITE/clear8.jpg', '/images/grau/CLEAR-GRAFITE/clear9.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Pollo', mainImage: '/images/grau/POLLO/pollo1.jpg', extraImages: ['/images/grau/POLLO/pollo1.jpg', '/images/grau/POLLO/pollo2.jpg', '/images/grau/POLLO/pollo3.jpg', '/images/grau/POLLO/pollo4.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Riley', mainImage: '/images/grau/RILEY/riley1.jpg', extraImages: ['/images/grau/RILEY/riley1.jpg', '/images/grau/RILEY/riley2.jpg', '/images/grau/RILEY/riley3.jpg', '/images/grau/RILEY/riley4.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Winter', mainImage: '/images/solar/WINTER/winter1.jpg', extraImages: ['/images/solar/WINTER/winter1.jpg', '/images/solar/WINTER/winter2.jpg', '/images/solar/WINTER/winter3.jpg', '/images/solar/WINTER/winter4.jpg'], price: 'R$ 199,99', promoPrice: 'R$ 149,99', category: 'solar' },
  { name: 'Vizz Seiva', mainImage: '/images/solar/SEIVA/seiva1.jpg', extraImages: ['/images/solar/SEIVA/seiva1.jpg', '/images/solar/SEIVA/seiva2.jpg', '/images/solar/SEIVA/seiva3.jpg', '/images/solar/SEIVA/seiva4.jpg'], price: 'R$ 199,99', promoPrice: 'R$ 149,99', category: 'solar' },
  { name: 'Vizz Swamp', mainImage: '/images/solar/SWAMP/swamp1.jpg', extraImages: ['/images/solar/SWAMP/swamp1.jpg', '/images/solar/SWAMP/swamp2.jpg', '/images/solar/SWAMP/swamp3.jpg', '/images/solar/SWAMP/swamp4.jpg'], price: 'R$ 199,99', promoPrice: 'R$ 149,99', category: 'solar' },
  { name: 'Vizz Osaka', mainImage: '/images/solar/OSAKA/osaka1.png', extraImages: ['/images/solar/OSAKA/osaka1.png', '/images/solar/OSAKA/osaka2.png', '/images/solar/OSAKA/osaka3.png', '/images/solar/OSAKA/osaka4.png'], price: 'R$ 219,99', promoPrice: 'R$ 169,99', category: 'solar' },
];

const Gallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('todos');

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = productsData.filter(product => {
    if (activeFilter === 'todos') return true;
    return product.category === activeFilter;
  });

  return (
    <section id="destaques" className={styles.destaques}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nossos Destaques</h2>
        <div className={styles.filterContainer}>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'todos' ? styles.active : ''}`}
            onClick={() => setActiveFilter('todos')}
          >
            Todos
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'grau' ? styles.active : ''}`}
            onClick={() => setActiveFilter('grau')}
          >
            Óculos de Grau
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'solar' ? styles.active : ''}`}
            onClick={() => setActiveFilter('solar')}
          >
            Óculos de Sol
          </button>
        </div>
        <div className={styles.cardsGrid}>
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              mainImage={product.mainImage}
              price={product.price}
              promoPrice={product.promoPrice}
              onCardClick={() => handleCardClick(product)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && <Modal product={selectedProduct} onClose={handleCloseModal} />}
    </section>
  );
};

export default Gallery;