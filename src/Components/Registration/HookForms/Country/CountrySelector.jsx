import React, { useState, useEffect } from 'react';
import styles from './CountrySelector.module.css';
import countriesList from 'countries-list';

const CountrySelector = ({ onUpdate, selectedCountry: initialCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState(initialCountry || 'Select your country');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allCountries = Object.values(countriesList.countries).map(country => country.name);

  const countries = [
    'Select your country',
    ...allCountries,
  ];

  const countriesFiltered = countries.filter((country) => country !== 'Select your country');

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    onUpdate({ country });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (initialCountry) {
      setSelectedCountry(initialCountry);
    }
  }, [initialCountry]);

  return (
    <div className={styles.formWrapper}>
      <p className={styles.title}>Country</p>
      <div
        className={`${styles.select} ${dropdownOpen ? styles.open : ''} ${styles.customDropdownContainer}`}
        onClick={toggleDropdown}
        onBlur={() => setDropdownOpen(false)}
        tabIndex={0}
      >
        <div className={styles.selectedOption}>{selectedCountry}</div>
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
          <div className={`${styles.customDropdownOptions} ${countries.length > 5 ? styles.scrollableContainer : ""}`}>
            <div className={styles.triangle}></div>
            <div className={styles.dropdownScroll}>
              <div className={styles.optionsContainer}>
                {countriesFiltered.map((country) => (
                  <div
                    key={country}
                    className={`${styles.customDropdownOption} ${selectedCountry === country ? styles.active : ''}`}
                    onClick={() => handleSelectCountry(country)}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountrySelector;
