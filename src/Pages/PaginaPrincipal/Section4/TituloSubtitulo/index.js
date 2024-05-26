import React from 'react';
import styles from './TituloSubtitulo.module.scss';

export function TituloSubtitulo() {
  return (
    <div className={styles.tituloSubtitulo}>
      <h1 className={styles.titulo}>Empresas parceiras</h1>
      <h2 className={styles.subtitulo}>
        <span>
          A seguir conheça os nossos parceiros empresariais da UNICEPLAC, 
          onde a colaboração entre o mundo acadêmico e empresarial floresce 
          em prol do sucesso dos nossos alunos e do avanço da sociedade 
          como um todo. Aqui, compartilhamos com orgulho as conexões valiosas 
          que estabelecemos com diversas empresas líderes nos mais variados setores.
        </span>
      </h2>
    </div>
  );
}