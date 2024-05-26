import React, { useState } from 'react'; 
import styles from'./Carousel.module.scss';
import arrowImage from 'Assets/ArrowRight.svg';
import leftArrow from 'Assets/CarrosselSetaEsquerda.svg';
import rightArrow from 'Assets/CarrosselSetaDireita.svg';


const MAX_VISIBILITY = 3;

export const Card = ({ title, content, backgroundImage, href, logo }) => (
  <div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <img src={logo} alt="Logo da Empresa" className={styles.card_logo}/>
    <div className={styles.card_content}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    <a href={href} className={styles.card_button}>Ver mais  <img src={arrowImage} alt="Arrow"/></a>

  </div>
);

export const EmpresaCarousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className={styles.carousel}>
      {active > 0 && <button className={`${styles.nav} ${styles.nav_left}`} onClick={() => setActive(i => i - 1)}><img src={leftArrow} alt="Seta para a esquerda" /></button>}
      {React.Children.map(children, (child, i) => (
        <div className={styles.card_container} style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            pointerEvents: active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className={`${styles.nav} ${styles.nav_right}`} onClick={() => setActive(i => i + 1)}><img src={rightArrow} alt="Seta para a direita" /></button>}
    </div>
  );
};