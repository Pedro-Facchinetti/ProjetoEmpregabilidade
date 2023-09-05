import React, { useState } from 'react';
import styles from './CustomTextInput.module.scss';

function CustomTextInput() {
  const [inputText, setInputText] = useState('');
  const maxCharacters = 100;

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
          Resuma suas competências:
        </label>
      </div>
      <div className={styles['character-count']}>
        {inputText.length}/{maxCharacters}{/** Contador visual de caracteres usados */}
      </div>
    </div>
  );
}

export default CustomTextInput;
