import React, { useState } from 'react';
import styles from './FotoDePerfil.module.scss';

export const FotoPerfil = ({ perfil, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles['perfil-container']} ${className} ${isHovered ? styles.hovered : ''}`} // Adicione a classe aqui
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={perfil} alt="foto de perfil do aluno" />
    </div>
  );
};