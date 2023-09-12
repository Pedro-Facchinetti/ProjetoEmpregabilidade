import React from 'react';
import cn from 'classnames';

import renderSection1 from './Section1/index';
import renderSection2 from './Section2/index';
import renderSection3 from './Section3/index';
import renderSection4 from './Section4';

import styles from './PaginaPrincipal.module.scss';

function PaginaPrincipal(props) {
  const scrollToTop = () => {
    const element = document.getElementById("section1");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  return (
    <main className={cn(styles.main, 'pagina-principal')}>
      <div id="section1" className={styles.main__cell}>{renderSection1(props)}</div>
      <div id="section2" className={styles.main__cell}>{renderSection2(props)}</div>
      <div id="section3" className={styles.main__cell}>{renderSection3(props)}</div>
      <div id="section4" className={styles.main__cell}>{renderSection4(props)}</div>
      <img
        className={styles.icon}
        src={require('Assets/Seta.png')}
        alt="Seta guia"
        onClick={scrollToTop}
      />
    </main>
  );
}

export default PaginaPrincipal;