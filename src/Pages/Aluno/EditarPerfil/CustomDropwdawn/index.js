import React, { useState } from 'react';
import styles from './CustomDropdawn.module.scss';

function CustomDropdown({ options, label }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdawnOpen, setIsDropdawnOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdawnOpen(false);
  };

  const toggleDropdawn = () => {
    setIsDropdawnOpen(!isDropdawnOpen);
  };

  return (
    <div className={styles['custom-dropdawn']}>
      {selectedOption && (
        <label
          className={`${styles.label} ${selectedOption && styles['label-active']}`}
        >
          {label}:
        </label>
      )}
      <div
        className={`${styles.placeholder} ${isDropdawnOpen && styles.active}`}
        onClick={toggleDropdawn}
      >
        {selectedOption ? selectedOption : `${label}:`}
      </div>
      {isDropdawnOpen && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
