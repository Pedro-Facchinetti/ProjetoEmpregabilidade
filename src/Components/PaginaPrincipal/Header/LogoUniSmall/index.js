import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from './LogoUniSmall.module.scss';
import logoDefault from './LogoUniSmall-Default.png';
import logoHover from './LogoUniSmall-Hover.svg';

export const LogoUniSmall = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles['logo-uni']} ${className}`}>
            <img
                className={`${styles['logo']} ${isHovered ? styles['hidden'] : ''}`}
                src={logoDefault}
                alt="Logo da Uniceplac"
            />
            <img
                className={`${styles['logo']} ${isHovered ? '' : styles['hidden']}`}
                src={logoHover}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt="Logo da Uniceplac"
            />
        </div>
    );
};

LogoUniSmall.propTypes = {
    className: PropTypes.string,
};