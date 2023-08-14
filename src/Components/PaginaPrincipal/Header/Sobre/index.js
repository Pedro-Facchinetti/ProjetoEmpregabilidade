import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from './Sobre.module.scss';

export const Sobre = ({ className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles['sobre']} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className={`${isHovered ? styles['hovered'] : ''}`}>Sobre</span>
    </div>
  );
};

Sobre.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};