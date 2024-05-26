import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button2.module.scss';

const Button2 = ({ label }) => {
  return (
    <button className={styles.button}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

Button2.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button2;