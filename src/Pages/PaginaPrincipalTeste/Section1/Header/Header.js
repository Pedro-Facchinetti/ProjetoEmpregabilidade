import React from 'react';
import styles from './header.module.scss';
import { LogoUni } from 'Components/PaginaPrincipal/Header/LogoUni/index'  
import { Sobre } from 'Components/PaginaPrincipal/Header/Sobre/index';      
import { QuemSomos } from 'Components/PaginaPrincipal/Header/QuemSomos/index';

const scrollToSection = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop + offset,
      behavior: 'smooth',
    });
  }
};

function Header() {
  return (
    <div className={styles.topo_Pagina__Conteudo__Cabecalho}>
      <div className={`${styles.topo_Pagina__Conteudo__Cabecalho__cell} ${styles.uniceplac_Logo}`}>
        <LogoUni />
      </div>
      <div className={styles.topo_Pagina__Conteudo__Cabecalho__spacer} />
      <Sobre className={styles.cabecalho_Sobre} onClick={() => scrollToSection('section2', 150)} />
      <div className={styles.topo_Pagina__Conteudo__Cabecalho__spacer} />
      <QuemSomos className={styles.cabecalho_QuemSomos} onClick={() => scrollToSection('section3', 0)}/>
    </div>
  );
}

export default Header;