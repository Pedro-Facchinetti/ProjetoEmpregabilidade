import React from 'react';
import styles from './Card.module.scss';

function Card({ icon, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.card__icon} src={icon} alt={title} />
      <h3 className={styles.card__title}>{title}</h3>
    </div>
  );
}

export default Card;