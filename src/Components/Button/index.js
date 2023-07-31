import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.scss';

const Button = ({ label }) => {
  return (
    <button className={styles.button}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;