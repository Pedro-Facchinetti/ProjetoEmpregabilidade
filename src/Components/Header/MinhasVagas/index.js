import React, { useState } from "react";
import styles from './MinhasVagas.module.scss';

export const MinhasVagas = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`${styles['minhas-vagas']} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`${isHovered ? styles['hovered'] : ''}`}>Minhas Vagas</span>
      </div>
    );
  };
