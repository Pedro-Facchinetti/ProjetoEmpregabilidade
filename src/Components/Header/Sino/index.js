import React, { useState } from 'react';
import styles from './NotificacaoSino.module.scss';
import sinoNormal from 'Assets/Sino.png';
import sinoHover from 'Assets/Sino-Hover.png';

export const NotificacaoSino = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${styles['sino-container']} ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img
        className={styles.sino}
        src={sinoNormal}
        alt="ícone de notificação"
      />
      <img
        className={`${styles['sino-hovered']} ${isHovered ? styles.hovered : ''}`}
        src={sinoHover}
        alt="ícone de notificação"
      />
    </div>
  );
};