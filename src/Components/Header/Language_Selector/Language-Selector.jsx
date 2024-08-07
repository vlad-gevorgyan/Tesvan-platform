import React, { useState } from 'react';
import styles from './Language-selector.module.css';

const LanguageSelector = ({languages}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);
  const [dropdownOpen, setDropdownOpen] = useState(false);



  const handleSelectLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.selectContainer}>
        <div
          className={`${styles.select} ${dropdownOpen ? styles.open : ''} ${
            styles.customDropdownContainer
          }`}
          onClick={toggleDropdown}
          onBlur={() => setDropdownOpen(false)}
          tabIndex={0}
        >
          <div className={styles.selectedOption}>
            {selectedLanguage}
            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={dropdownOpen ? styles.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {dropdownOpen && (
            <div className={styles.customDropdownOptions}>
              <div className={styles.triangle}></div>
              {languages.map((language) => (
                <div
                  key={language.code}
                  className={`${styles.customDropdownOption} ${
                    selectedLanguage === language.code ? styles.active : ''
                  }`}
                  onClick={() => handleSelectLanguage(language.code)}
                >
                  {language.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
