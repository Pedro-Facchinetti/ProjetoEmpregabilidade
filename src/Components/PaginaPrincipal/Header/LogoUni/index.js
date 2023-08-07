import PropTypes from "prop-types";
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import styles from './LogoUni.module.scss';
import logoDefault from './UniLogo-Default.png';
import logoHover from './UniLogo-Hover.png';
import logoDefaultSmall from './LogoUniSmall-Default.png';
import logoHoverSmall from './LogoUniSmall-Hover.png';

export const LogoUni = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' }); // Verifica se a tela é pequena

    return (
        <div className={`${styles['logo-uni']} ${className}`}>
            <div className={styles['logo-container']}>
                <img
                    className={`${styles['logo']} ${isHovered ? styles['hidden'] : ''}`}
                    src={isSmallScreen ? logoDefaultSmall : logoDefault} // Usa o logo menor se a tela for pequena
                    alt="Logo da Uniceplac"
                />
            </div>
            <div className={styles['logo-container']}>
                <img
                    className={`${styles['logo']} ${isHovered ? '' : styles['hidden']}`}
                    src={isSmallScreen ? logoHoverSmall : logoHover} // Usa o logo menor se a tela for pequena
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    alt="Logo da Uniceplac"
                />
            </div>
        </div>
    );
};

LogoUni.propTypes = {
    className: PropTypes.string,
};