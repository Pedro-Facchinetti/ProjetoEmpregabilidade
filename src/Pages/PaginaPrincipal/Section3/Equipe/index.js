import React from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardEquipe from './Card/index';
import styles from './Equipe.module.scss';

const Equipe = ({ membros }) => {
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

  return (
    <div className={styles.equipe}>
      <h2 className={styles.titulo}>Equipe de desenvolvedores</h2>
      {isMobile ? (
        <Slider {...settings}>
          {membros.map(membro => (
            <div key={membro.nome}>
              <CardEquipe membro={membro} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.membros}>
          {membros.map(membro => (
            <CardEquipe key={membro.nome} membro={membro} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Equipe;