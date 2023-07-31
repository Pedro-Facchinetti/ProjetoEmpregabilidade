import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from './QuemSomos.module.scss';
import quemSomosDefault from './QuemSomos-Default.svg';
import quemSomosHover from './QuemSomos-Hover.svg';

export const QuemSomos = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${styles['quem-somos']} ${className}`}>
            <img
                className={`${styles['texto']} ${isHovered ? styles['hidden'] : ''}`}
                src={quemSomosDefault}
                alt="Quem Somos?"
            />
            <img
                className={`${styles['texto']} ${isHovered ? '' : styles['hidden']}`}
                src={quemSomosHover}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt="Quem Somos?"
            />
        </div>
    );
};

QuemSomos.propTypes = {
    className: PropTypes.string,
};