import React from 'react';
import styles from './TitleSubtitle.module.scss';

function TitleSubtitle() {
  return (
    <div className={styles.topo_Pagina__Conteudo__TituloSubtitulo}>
      <h1 className={styles.titulos_Subtitulo_Cabecalho__titulo}>
        Empregabilidade e Estágios nas Áreas de T.I.
      </h1>
      <h2 className={styles.titulos_Subtitulo_Cabecalho__Subtitulo}>
        Amplie sua possibilidade de Empregabilidade e Estágio nas se cadastrando no nosso projeto de
        Empregabilidade do Centro Universitário UNICEPLAC.
      </h2>
    </div>
  );
}

export default TitleSubtitle;