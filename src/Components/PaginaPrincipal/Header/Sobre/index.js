import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from './Sobre.module.scss';
import sobreDefault from './Sobre-Default.svg';
import sobreHover from './Sobre-Hover.svg';

export const Sobre = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles['sobre']} ${className}`}>
            <img
                className={`${styles['texto']} ${isHovered ? styles['hidden'] : ''}`}
                src={sobreDefault}
                alt="Sobre"
            />
            <img
                className={`${styles['texto']} ${isHovered ? '' : styles['hidden']}`}
                src={sobreHover}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt="Sobre"
            />
        </div>
    );
};

Sobre.propTypes = {
    className: PropTypes.string,
};