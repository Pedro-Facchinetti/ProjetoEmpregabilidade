import React from 'react';
import cn from 'classnames';
import styles from './Homealuno.module.scss';
import CardVaga from 'Components/Vaga/Card/index';

function Homealuno() {
  return (
    <div className={cn(styles.root, 'homealuno')}>
      
      <div className={styles.home}>
        <div className={styles.home__apresentacao}>
          <h1 className={styles.home__apresentacao__titulo}>Vagas cadastradas</h1>
          <h3 className={styles.home__apresentacao__subtitulo}>
            Estas são todas as vagas que você se cadastrou até o momento.
          </h3>
        </div>

        <div className={styles.home__vaga}>
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

export default Homealuno;
