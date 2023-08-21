import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";
import icon from "Assets/IconeDropDown.svg"

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <div className={styles.dropdown__header}>
        <span>{selectedOption || placeholder}</span>
        <img className={styles.dropdown__icon} alt="Dropdown icon" src={icon} />
      </div>
      {isOpen && (
        <div className={styles.dropdown__list}>
          {options.map(option => (
            <div 
              key={option}
              className={styles.dropdown_list_item}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Dropdown;