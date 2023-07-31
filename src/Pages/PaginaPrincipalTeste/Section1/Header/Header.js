import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from './header.module.scss';
import { LogoUni } from 'Components/PaginaPrincipal/Header/LogoUni/index'
import { LogoUniSmall } from 'Components/PaginaPrincipal/Header/LogoUniSmall';
import { Sobre } from 'Components/PaginaPrincipal/Header/Sobre/index';      
import { QuemSomos } from 'Components/PaginaPrincipal/Header/QuemSomos/index';

function Header() {
  const matches = useMediaQuery('(max-width:600px)'); // Aqui é onde definimos a variável 'matches'
  
  return (
    <div className={styles.topo_Pagina__Conteudo__Cabecalho}>
      <div className={styles.topo_Pagina__Conteudo__Cabecalho__cell}>
      {matches ? <LogoUniSmall className={styles.uniceplac_Logo} /> : <LogoUni className={styles.uniceplac_Logo} />}
      </div>
      <div className={styles.topo_Pagina__Conteudo__Cabecalho__spacer} />
      <Sobre className={styles.cabecalho_Sobre} />
      <div className={styles.topo_Pagina__Conteudo__Cabecalho__spacer} />
      <QuemSomos className={styles.cabecalho_QuemSomos} />
    </div>
  );
}

export default Header;