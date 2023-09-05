import React, { useState } from 'react';
import styles from './CustomDropdown.module.scss';

function CustomDropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles['custom-dropdown']}>
      {selectedOption && (
        <label
          className={`${styles.label} ${selectedOption && styles['label-active']}`}
        >
          Curso:
        </label>
      )}
      <div
        className={`${styles.placeholder} ${isDropdownOpen && styles.active}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : 'Escolha seu cruso:'}
      </div>
      {isDropdownOpen && (
        <div className={styles.options}>
          <div
            className={styles.option}
            onClick={() => handleOptionSelect('ADS')}
          >
            ADS
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionSelect('Engenharia de Software')}
          >
            Engenharia de Software
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionSelect('Sistemas de Informação')}
          >
            Sistemas de Informação
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
