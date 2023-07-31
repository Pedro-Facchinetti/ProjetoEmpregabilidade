import React from 'react';

import Header from './Header/Header';
import TitleSubtitle from './TitleSubtitle/TitleSubtitle';
import Buttons from './Buttons/Buttons';

import styles from './Section1.module.scss';

function renderSection1(props) {
  return (
    <section className={styles.topo_Pagina}>
      <div className={styles.topo_Pagina1}>
        <img
          className={styles.topo_Pagina__Estudante}
          src={require('Assets/Estudante.png')}
          alt="Estudante Sentado"
        />
        <div className={styles.topo_Pagina__Conteudo}>
          <Header />
          <TitleSubtitle />
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default renderSection1;