import React from 'react';
import Card from './Card/index';
import styles from './Cards.module.scss';

function Cards() {
  return (
    <div className={styles.cards}>
      <Card
        icon={require('Assets/linkedin.png')}
        title="Oportunidade de implementar seu currículo porfissional"
      />
      <div className={styles.spacer} />
      <Card
        icon={require('Assets/medalha.png')}
        title="Maior visibilidade da universidade"
      />
      <div className={styles.spacer} />
      <Card
        icon={require('Assets/maleta.png')}
        title="Recomendação de trabalho pela UNICEPLAC"
      />
    </div>
  );
}

export default Cards;