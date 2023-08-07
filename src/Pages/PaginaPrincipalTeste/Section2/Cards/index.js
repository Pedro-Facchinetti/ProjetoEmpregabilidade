import React from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from './Card/index';
import styles from './Cards.module.scss';

function Cards() {
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true
        }
      }
    ]
  };

  const cardsInfo = [
    {
      icon: require('Assets/linkedin.png'),
      title: "Oportunidade de implementar seu currículo porfissional"
    },
    {
      icon: require('Assets/medalha.png'),
      title: "Maior visibilidade da universidade"
    },
    {
      icon: require('Assets/maleta.png'),
      title: "Recomendação de trabalho pela UNICEPLAC"
    }
  ];

  const cards = cardsInfo.map((card, index) => (
    <div key={index} className={styles.cardWrapper}>
      <Card icon={card.icon} title={card.title} />
    </div>
  ));

  return (
    <div className={isMobile ? styles.cardsMobile : styles.cards}>
      {isMobile ? (
        <Slider {...settings}>
          {cards}
        </Slider>
      ) : (
        <>
          {cards}
          <div className={styles.spacer} />
        </>
      )}
    </div>
  );
}

export default Cards;