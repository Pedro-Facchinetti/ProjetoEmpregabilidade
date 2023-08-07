import React from 'react';
import { TituloSubtitulo } from './TituloSubtitulo/index';
import Cards from './Cards/index';

import styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section className={styles.introducao}>
      <div className={styles.introducao__ConteudoPrincipal}>
        <TituloSubtitulo />
        <Cards />
      </div>

      <img
        className={styles.introducao__LinhasDivisorias}
        src={require('Assets/Linhas-divisorias.svg').default}
        alt="Linhas divisórias cards de vantagens"
      />
    </section>
  );
}

export default renderSection2;