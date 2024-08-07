import React, { useState, useEffect } from 'react';
import styles from './StudyLocationSelector.module.css';

const StudyLocationSelector = ({ onUpdate, selectedLocation: initialLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(initialLocation || 'Select your study location');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const studyLocations = [
    'Where do you study?',
    'School',
    'College',
    'University',
    'Self-study',
  ];

  const studyLocationsFiltered = studyLocations.filter((location) => location !== 'Where do you study?');

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setDropdownOpen(false);

    onUpdate({ education: location });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (initialLocation) {
      setSelectedLocation(initialLocation);
    }
  }, [initialLocation]);

  return (
    <div className={styles.formWrapper}>
      <p className={styles.title}>Education</p>
      <div className={styles.selectContainer}>
        <div
          className={`${styles.select} ${dropdownOpen ? styles.open : ''} ${styles.customDropdownContainer}`}
          onClick={toggleDropdown} // Клик на компоненте, чтобы показать/скрыть список
          onBlur={() => setDropdownOpen(false)}
          tabIndex={0}
        >
          <div className={styles.selectedOption}>{selectedLocation}</div>
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
          {dropdownOpen && (
            <div className={styles.customDropdownOptions}>
              <div className={styles.triangle}></div>
              {studyLocationsFiltered.map((location) => (
                <div
                  key={location}
                  className={`${styles.customDropdownOption} ${selectedLocation === location ? styles.active : ''}`}
                  onClick={() => handleSelectLocation(location)}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyLocationSelector;
