// Nav.js
import React from 'react';
import styles from './Nav.module.scss';
import CardVaga from 'Components/Vaga/Card/index';
import BarraDePesquisa from 'Components/BarraDePesquisa';

function Nav() {
  return (
    <div className={styles.Nav}>
      <BarraDePesquisa />
      <div className={styles.Nav__CardsContainer}>
        <div className={styles.Card}>
          <CardVaga 
            banner={require('Assets/ProcurarVagas/Nav/EstagioProgramacaoBanner.png')}
            nome="Estágio de  Programação"
            tipoVaga="Estágio"
            localidade="São Paulo - SP - Remoto"
          />
        </div>

        <div className={styles.Card}>
          <CardVaga 
            banner={require('Assets/ProcurarVagas/Nav/EstagioSuporteBanner.png')}
            nome="Estágio de suporte"
            tipoVaga="Estágio"
            localidade="Brasília - DF - Presencial"
          />
        </div>

        <div className={styles.Card}>
          <CardVaga 
            banner={require('Assets/ProcurarVagas/Nav/EstagioAnaliseDeDadosBanner.png')}
            nome="Estágio de Analise de Dados"
            tipoVaga="Estágio"
            localidade="Brasília - DF - Hibrido"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;