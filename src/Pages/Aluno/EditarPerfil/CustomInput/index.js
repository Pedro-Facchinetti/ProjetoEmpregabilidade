import React, { useState } from 'react';
import styles from './customInput.module.scss';

function CustomInput({ placeholder }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className={`${styles['custom-input']} ${isFocused || inputValue !== '' ? styles.active : ''}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  );
}

export default CustomInput;
