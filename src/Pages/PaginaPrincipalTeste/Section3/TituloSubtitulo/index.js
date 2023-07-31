import React from 'react';
import styles from './TituloSubtitulo.module.scss';

const TituloSubtitulo = ({ titulo, subtitulo }) => {
  return (
    <div className={styles.tituloSubtitulo}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <h2 className={styles.subtitulo}>{subtitulo}</h2>
    </div>
  );
};

export default TituloSubtitulo;