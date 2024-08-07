import React, { useState, useEffect } from 'react';
import styles from './EnglishLevelSelector.module.css';

const EnglishLevelSelector = ({ onUpdate, selectedEnglishLevel: initialEnglishLevel }) => {
  const [selectedLevel, setSelectedLevel] = useState(initialEnglishLevel || 'Select your English level');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const englishLevels = [
    'Select your English level',
    'Beginner',
    'Elementary',
    'Pre-Intermediate',
    'Intermediate',
    'Upper-Intermediate',
    'Advanced',
  ];

  const englishLevelsFiltered = englishLevels.filter((level) => level !== 'Select your English level');

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    setDropdownOpen(false);

    onUpdate({ englishLevel: level });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (initialEnglishLevel) {
      setSelectedLevel(initialEnglishLevel);
    }
  }, [initialEnglishLevel]);

  return (
    <div className={styles.formWrapper}>
      <p className={styles.title}>English level</p>
      <div className={styles.selectContainer}>
        <div
          className={`${styles.select} ${dropdownOpen ? styles.open : ''} ${styles.customDropdownContainer}`}
          onClick={toggleDropdown} // Клик на компоненте, чтобы показать/скрыть список
          onBlur={() => setDropdownOpen(false)}
          tabIndex={0}
        >
          <div className={styles.selectedOption}>{selectedLevel}</div>
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
          {/* Отображаем список только с отфильтрованными уровнями */}
          {dropdownOpen && (
            <div className={styles.customDropdownOptions}>
              <div className={styles.triangle}></div>
              {englishLevelsFiltered.map((level) => (
                <div
                  key={level}
                  className={`${styles.customDropdownOption} ${selectedLevel === level ? styles.active : ''}`}
                  onClick={() => handleSelectLevel(level)}
                >
                  {level}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnglishLevelSelector;
