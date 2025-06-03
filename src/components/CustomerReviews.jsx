import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/components/CustomerReviews.module.css';

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: 'Wilker Martins', comment: 'Melhor atendimento da cidade! Produtos de ótimas qualidade e modernos. Loja aconchegante e bonita!' },
    { id: 2, name: 'Debora Ap Ferreira', comment: 'Trabalho de excelência. Atendimento, pontualidade, preço justo e produtos de excelente qualidade. Super recomendo.' },
    { id: 3, name: 'Barbara Caroline', comment: 'Amei a ótica, fácil acesso e com ampla variedade. Parabéns pelo atendimento e paciência em cada detalhe. Qualidade muito boa, recomendo e irei comprar novamente. Obrigada.' },
    { id: 4, name: 'Yan Rocha', comment: 'Comprei meus óculos, ficaram prontos super rápido e atendimento excelente! Recomendo 💙' },
    { id: 5, name: 'Bruna Santos', comment: 'Super indico a Óticas Vizz, atendimento sensacional. Adquiri dois óculos, e estou amando a qualidade. Com certeza vou indicar para meus familiares e amigos.' },
    { id: 6, name: 'Elem Fiuza', comment: 'Melhor atendimento que eu poderia receber. Óculos super em conta e os funcionários são uns gatos 😍' },
    { id: 7, name: 'Rafael Santos', comment: 'Super indico, os meninos me explicaram tudo sobre as lentes do meu óculos. Sem falar as Armações são lindas, e muito acessível. Com certeza irei fazer todos meus óculos com a oticas vizz! Parabéns meninos, continuem assim 🥰' },
    { id: 8, name: 'Rodrigo Santos', comment: 'Atendimento nota 10.Fui pra comprar um óculos acabei saindo com dois kkkkk Eu amei ❤️❤️❤️❤️' },
    { id: 9, name: 'Reginaldo Pereira', comment: 'Excelente atendimento, preço justo, e pontualidade na entrega. No meu caso foi entregue dois dias antes do prazo. Eu recomendo sem medo nenhum. Excelente empresa!!!' },
    { id: 10, name: 'Paulo Brandão', comment: 'A loja tem produtos excelentes e o atendimento é ótimo!! Recomendo dmais!!' },
  ];

  const reviewsContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = reviewsContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  const scrollLeft = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = reviewsContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();

    return () => container.removeEventListener('scroll', updateScrollButtons);
  }, []);

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.arrowsContainer}>
        {canScrollLeft && (
          <div className={`${styles.btnSetaContainer} ${styles.leftContainer}`}>
            <button
              className={styles.arrowButton}
              onClick={scrollLeft}
              aria-label="Rolar para a esquerda"
              title="Rolar para a esquerda"
            >
              &lt;
            </button>
          </div>
        )}

        <div ref={reviewsContainerRef} className={styles.reviewsContainer}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <p className={styles.reviewComment}>{review.comment}</p>
              <span className={styles.reviewName}>- {review.name}</span>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <div className={`${styles.btnSetaContainer} ${styles.rightContainer}`}>
            <button
              className={styles.arrowButton}
              onClick={scrollRight}
              aria-label="Rolar para a direita"
              title="Rolar para a direita"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
