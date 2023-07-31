import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from './LogoUni.module.scss';
import logoDefault from './UniLogo-Default.png';
import logoHover from './UniLogo-Hover.png';

export const LogoUni = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles['logo-uni']} ${className}`}>
            <div className={styles['logo-container']}>
                <img
                    className={`${styles['logo']} ${isHovered ? styles['hidden'] : ''}`}
                    src={logoDefault}
                    alt="Logo da Uniceplac"
                />
            </div>
            <div className={styles['logo-container']}>
                <img
                    className={`${styles['logo']} ${isHovered ? '' : styles['hidden']}`}
                    src={logoHover}
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