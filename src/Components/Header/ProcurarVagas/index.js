import React, { useState } from "react";
import styles from './ProcurarVagas.module.scss';

export const ProcurarVagas = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`${styles['procurar-vagas']} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`${isHovered ? styles['hovered'] : ''}`}>Procurar Vagas</span>
      </div>
    );
  };