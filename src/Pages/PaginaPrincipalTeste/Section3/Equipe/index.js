import React from 'react';
import CardEquipe from './Card/index';
import styles from './Equipe.module.scss';

const Equipe = ({ membros }) => {
  return (
    <div className={styles.equipe}>
      <h1 className={styles.titulo}>Equipe de desenvolvedores</h1>
      <div className={styles.membros}>
        {membros.map(membro => (
          <CardEquipe key={membro.nome} membro={membro} />
        ))}
      </div>
    </div>
  );
};

export default Equipe;