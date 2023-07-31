import React from 'react';
import styles from './TituloSubtitulo.module.scss';

export function TituloSubtitulo() {
  return (
    <div className={styles.tituloSubtitulo}>
      <h1 className={styles.titulo}>Projeto empregabilidade</h1>
      <h2 className={styles.subtitulo}>
        <span>
          Este projeto foi criado com o objetivo de ajudar os alunos dos{' '}
        </span>
        <span className={styles.subtitulo_bold}>
          cursos de tecnologia,{' '}
        </span>
        <span>
          com vagas e estágios na área com empresas parceiras da UNICEPLAC, como um incentivo de fortalecer ou
          iniciar sua carreira profissional. Organizamos suas competências como um breve currículo, e montamos uma
          “vitrine de alunos” para as nossas empresas parceiras que precisam de funcionários possam ter maior
          visualização de alunos desta universidade interessados em vagas propostas por elas.{' '}
        </span>
      </h2>
    </div>
  );
}
