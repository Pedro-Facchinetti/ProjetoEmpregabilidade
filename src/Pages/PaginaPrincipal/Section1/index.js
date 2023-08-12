import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from './Header/Header';
import TitleSubtitle from './TitleSubtitle/TitleSubtitle';
import Buttons from './Buttons/Buttons';

import styles from './Section1.module.scss';
import estudanteImage from 'Assets/Estudante.png';
import mobileImage from 'Assets/Section1BG.png';

function RenderSection1(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' });
  const studentImage = isMobile ? mobileImage : estudanteImage;

  return (
    <section className={styles.topo_Pagina}>
      <div className={styles.topo_Pagina__Conteudo}>
        <Header />
        <TitleSubtitle />
        <Buttons />
      </div>
      <img
        className={styles.topo_Pagina__Estudante}
        src={studentImage}
        alt="Estudante Sentado"
      />
    </section>
  );
}

export default RenderSection1;