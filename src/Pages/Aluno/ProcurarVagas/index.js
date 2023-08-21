import React from 'react';
import cn from 'classnames';
import styles from './ProcurarVagas.module.scss';
import CardVaga from 'Components/Vaga/Card/index';
import Nav from './Nav/index'

function ProcurarVagas() {
  return (
    <div className={cn(styles.root, 'ProcurarVagas')}>
      
      <div className={styles.ProcurarVagas}>
        <div className={styles.ProcurarVagas__apresentacao}>
            <h1 className={styles.ProcurarVagas__apresentacao__titulo}>Mais opções de vagas</h1>
            <Nav/>
        </div>

        <div className={styles.ProcurarVagas__vaga}>
          <CardVaga
            banner={require('Assets/BannerFalso.png')}
            nome="Estágio de suporte"
            tipoVaga="Estágio"
            localidade="Brasília - DF - Remoto/Hibrido"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcurarVagas;
