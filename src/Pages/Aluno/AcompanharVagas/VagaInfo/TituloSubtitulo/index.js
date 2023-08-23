import React from 'react';
import styles from './TitulosSubtitulos.module.scss';
import localidadeIcon from 'Assets/CardVaga_Localidade.png';
import tipoVagaIcon from 'Assets/CardVaga_Mala.png';

function TitulosSubtitulos({ bannerSrc, logoSrc, titulo, dataPublicacao, localidadeTexto, tipoVagaTexto }) {
  return (
    <div className={styles.TitulosSubtitulos}>
      <div className={styles.BannerContainer}>
        <img
          className={styles.Banner}
          src={bannerSrc}
          alt="Banner da vaga"
        />
        <img
          className={styles.Icone}
          src={logoSrc}
          alt="Icone da empresa"
        />
        <button className={styles.BotaoVoltar}>
          Voltar
        </button>
      </div>
      <div className={styles.Header}>
      <h1 className={styles.TitulosSubtitulos__Header__Titulo}>
        {titulo}
      </h1>
      <h3 className={styles.TitulosSubtitulos__Header__Subtitulo}>
        {dataPublicacao}
      </h3>

      <div className={styles.TitulosSubtitulos__Header__Localidade}>
        <img
          className={styles.TitulosSubtitulos__Header__Localidade__Icone}
          src={localidadeIcon}
          alt="Ícone de localidade"
        />
        <h3 className={styles.TitulosSubtitulos__Header__Localidade__Texto}>
          {localidadeTexto}
        </h3>
      </div>

      <div className={styles.TitulosSubtitulos__Header__TipoVaga}>
        <img
          className={styles.TitulosSubtitulos__Header__TipoVaga__Icone}
          src={tipoVagaIcon}
          alt="Ícone do tipo de vaga"
        />
        <h3 className={styles.TitulosSubtitulos__Header__TipoVaga__Texto}>
          {tipoVagaTexto}
        </h3>
      </div>
      </div> 
    </div>
  );
}

export default TitulosSubtitulos;