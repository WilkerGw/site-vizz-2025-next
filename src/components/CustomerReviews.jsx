import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/components/CustomerReviews.module.css';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';

const CustomerReviews = () => {
  // Dados enriquecidos com avaliação (rating) e iniciais (initials)
  const reviews = [
    { id: 1, name: 'Wilker Martins', comment: 'Melhor atendimento da cidade! Produtos de ótimas qualidade e modernos. Loja aconchegante e bonita!', rating: 5, initials: 'WM' },
    { id: 2, name: 'Debora Ap Ferreira', comment: 'Trabalho de excelência. Atendimento, pontualidade, preço justo e produtos de excelente qualidade. Super recomendo.', rating: 5, initials: 'DF' },
    { id: 3, name: 'Barbara Caroline', comment: 'Amei a ótica, com ampla variedade. Parabéns pelo atendimento e paciência em cada detalhe. Qualidade muito boa, recomendo.', rating: 5, initials: 'BC' },
    { id: 4, name: 'Yan Rocha', comment: 'Comprei meus óculos, ficaram prontos super rápido e atendimento excelente! Recomendo 💙', rating: 5, initials: 'YR' },
    { id: 5, name: 'Bruna Santos', comment: 'Super indico a Óticas Vizz, atendimento sensacional. Adquiri dois óculos, e estou amando a qualidade.', rating: 5, initials: 'BS' },
    { id: 6, name: 'Elem Fiuza', comment: 'Melhor atendimento que eu poderia receber. Óculos super em conta e os funcionários são uns gatos 😍', rating: 5, initials: 'EF' },
    { id: 7, name: 'Rafael Santos', comment: 'Super indico, os meninos me explicaram tudo sobre as lentes do meu óculos. As Armações são lindas, e muito acessível!', rating: 5, initials: 'RS' },
    { id: 8, name: 'Rodrigo Santos', comment: 'Atendimento nota 10. Fui pra comprar um óculos acabei saindo com dois kkkkk Eu amei ❤️', rating: 5, initials: 'RS' },
    { id: 9, name: 'Reginaldo Pereira', comment: 'Excelente atendimento, preço justo, e pontualidade na entrega. No meu caso foi entregue dois dias antes do prazo. Recomendo!', rating: 5, initials: 'RP' },
    { id: 10, name: 'Paulo Brandão', comment: 'A loja tem produtos excelentes e o atendimento é ótimo!! Recomendo dmais!!', rating: 5, initials: 'PB' },
  ];

  const reviewsContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = reviewsContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scroll = (direction) => {
    if (reviewsContainerRef.current) {
      const scrollAmount = reviewsContainerRef.current.clientWidth * 0.8;
      reviewsContainerRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const container = reviewsContainerRef.current;
    if (!container) return;
    let debounceTimer;
    const handleScroll = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(checkScrollButtons, 100);
    };
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScrollButtons);
    checkScrollButtons();
    return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>O que nossos <span className={styles.span}>clientes dizem</span></h2>
      <div className={styles.carouselWrapper}>
        <div ref={reviewsContainerRef} className={styles.reviewsContainer}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <div className={styles.starRating}>
                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className={styles.reviewComment}>"{review.comment}"</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{review.initials}</div>
                <span className={styles.reviewName}>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className={`${styles.arrowButton} ${styles.left} ${!canScrollLeft ? styles.disabled : ''}`}
          onClick={() => scroll(-1)}
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
        <button
          className={`${styles.arrowButton} ${styles.right} ${!canScrollRight ? styles.disabled : ''}`}
          onClick={() => scroll(1)}
          aria-label="Próximo"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;