import React from "react";
import PropTypes from 'prop-types';
import styles from './NavButton.module.scss'

const NavButton = ({ label }) => {
    return (
        <button className={styles.nav__button}>
            <span className={styles.label} onClick={scrollToElement}>{label}</span>
        </button>
    );
};

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
};

const scrollToElement = () => {
    const element = document.getElementById("");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default NavButton;