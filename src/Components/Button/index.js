import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({ label, className, type = 'button' }) => {
  return (
    <button type={type} className={cx(styles.button, className)}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;