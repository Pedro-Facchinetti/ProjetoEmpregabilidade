import React from 'react';
import styles from './CardVaga.module.scss';

function CardVaga({ banner, nome, tipoVaga, localidade }) {
  return (
    <div className={styles.home__vaga__Card}>
      <img
        className={styles.home__vaga__Card__banner}
        src={banner}
        alt="Banner da Vaga"
      />

      <div className={styles.home__vaga__Card__Conteudo}>
        <div className={styles.home__vaga__Card__Conteudo__Apresentacao}>
          <h3 className={styles.home__vaga__Card__Conteudo__Apresentacao__Nome}>{nome}</h3>

          <div className={styles.home__vaga__Card__Conteudo__Apresentacao__TipoVaga}>
            <img
              className={styles.home__vaga__Card__Conteudo__Apresentacao__TipoVaga__Icone}
              src={require('Assets/CardVaga_Mala.png')}
              alt="Tipo da Vaga"
            />
            <div className={styles.home__vaga__Card__Conteudo__Apresentacao__TipoVaga__cell}>
              <h5 className={styles.highlight}>{tipoVaga}</h5>
            </div>
          </div>

          <div className={styles.home__vaga__Card__Conteudo__Apresentacao__Localidade}>
            <img
              className={styles.home__vaga__Card__Conteudo__Apresentacao__Localidade__Icone}
              src={require('Assets/CardVaga_Localidade.png')}
              alt="Localidade da Vaga"
            />
            <div className={styles.home__vaga__Card__Conteudo__Apresentacao__Localidade__cell}>
              <h5 className={styles.highlight1}>{localidade}</h5>
            </div>
          </div>
        </div>

        <div className={styles.home__vaga__Card__Conteudo__spacer} />

        <div className={styles.home__vaga__Card__Conteudo__Botao}>
          <h5 className={styles.highlight11}>Acompanhar</h5>
        </div>
      </div>
    </div>
  );
}

export default CardVaga;