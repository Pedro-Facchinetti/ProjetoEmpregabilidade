import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import styles from './LogoUni.module.scss';
import logoDefault from './UniLogo-Default.png';
import logoHover from './UniLogo-Hover.png';
import logoDefaultSmall from './LogoUniSmall-Default.png';
import logoHoverSmall from './LogoUniSmall-Hover.png';

export const LogoUni = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' });

  return (
    <div className={`${styles['logo-uni']} ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img
        className={`${styles['logo']} ${isHovered ? styles['hidden'] : ''}`}
        src={isSmallScreen ? logoDefaultSmall : logoDefault}
        alt="Logo da Uniceplac"
        style={{ objectFit: 'contain' }}
      />
      <img
        className={`${styles['logo']} ${isHovered ? '' : styles['hidden']}`}
        src={isSmallScreen ? logoHoverSmall : logoHover}
        alt="Logo da Uniceplac"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

LogoUni.propTypes = {
    className: PropTypes.string,
};