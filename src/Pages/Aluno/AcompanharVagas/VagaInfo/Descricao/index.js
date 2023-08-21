import React from 'react';
import styles from './Descricao.module.scss';

function Descricao({ sobreVaga, requisitos, oferecemos, sobreEmpresa }) {
  return (
    <div className={styles.descricaoContainer}>

      <h1 className={styles.descricaoTitulo}>
        Descrição da vaga
      </h1>
      
      <h5 className={styles.subTitulo}>Sobre a vaga</h5>
      <p className={styles.conteudo}>
        {sobreVaga}
      </p>
      
      <h5 className={styles.subTitulo}>Requisitos</h5>
      <p className={styles.conteudo}>
        {requisitos}
      </p>
      
      <h5 className={styles.subTitulo}>O que oferecemos</h5>
      <p className={styles.conteudo}>
        {oferecemos}
      </p>
      
      <h5 className={styles.subTitulo}>Sobre a empresa</h5>
      <p className={styles.conteudo}>
        {sobreEmpresa}
      </p>

    </div>
  );
}

export default Descricao;