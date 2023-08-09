import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from './QuemSomos.module.scss';

export const QuemSomos = ({ className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles['quem-somos']} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className={`${isHovered ? styles['hovered'] : ''}`}>Quem Somos?</span>
    </div>
  );
};

QuemSomos.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
