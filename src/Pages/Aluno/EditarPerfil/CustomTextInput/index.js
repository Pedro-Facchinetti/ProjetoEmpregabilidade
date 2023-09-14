import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes para definir prop types
import styles from './CustomTextInput.module.scss';

function CustomTextInput({ label }) { // Receba a propriedade 'label'
  const [inputText, setInputText] = useState('');
  const maxCharacters = 500;

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxCharacters) {
      setInputText(newText);
    }
  };

  const isInputFocused = inputText.length > 0;

  return (
    <div className={styles['custom-text-input']}>
      <div className={styles['input-container']}>
        <textarea
          placeholder=" "
          value={inputText}
          onChange={handleChange}
          className={styles.input}
        />
        <label
          className={`${styles.label} ${isInputFocused && styles['label-focused']}`}
        >
          {label}
        </label>
      </div>
      <div className={styles['character-count']}>
        {inputText.length}/{maxCharacters}
      </div>
    </div>
  );
}

CustomTextInput.propTypes = {
  label: PropTypes.string.isRequired, // Defina o prop type para 'label'
};

export default CustomTextInput;
