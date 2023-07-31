import React from 'react';
import styles from './CardEquipe.module.scss';

const CardEquipe = ({ membro }) => {
  return (
    <div className={styles.card}>
      <img className={styles.foto} src={membro.foto} alt={membro.nome} />
      <div className={styles.conteudo}>
        <div className={styles.titulos}>
          <h2 className={styles.nome}>{membro.nome}</h2>
          <h2 className={styles.cargo}>{membro.cargo}</h2>
        </div>
        <div className={styles.divisoria} />
      </div>
    </div>
  );
};

export default CardEquipe;