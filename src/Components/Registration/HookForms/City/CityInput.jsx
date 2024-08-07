import React, { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './CityInput.module.css';

const CityInput = ({ onUpdate, city: initialCity }) => {
  const { control, reset } = useForm();

  const [cityFilled, setCityFilled] = useState(!!initialCity);
  const [cityValid, setCityValid] = useState(true);
  const [cityInput, setCityInput] = useState(initialCity || '');

  const inputRef = useRef(null);

  const handleCityChange = (e) => {
    const value = e.target.value.trim();
    setCityInput(value);
    setCityFilled(value !== '');
    setCityValid(value === '' || /^[A-Z][a-z]*$/.test(value));
  };

  const handleOutsideClick = () => {
    if (cityValid && cityInput !== '') {
      const data = { city: cityInput };
      reset();
      onUpdate(data);
    }
  };

  useEffect(() => {
    if (initialCity) {
      onUpdate({ city: initialCity });
    }
  }, [initialCity]);

  return (
    <form>
      <div className={styles.formContainer}>
        <p className={styles.label}>City</p>
        <Controller
          name="city"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div className={styles.inputContainer} ref={inputRef}>
              <input
                {...field}
                value={cityInput}
                placeholder='Where do you live?'
                className={`${styles.inputField} ${
                  cityFilled
                    ? cityValid
                      ? styles.success
                      : styles.error
                    : ''
                }`}
                onChange={(e) => {
                  field.onChange(e);
                  handleCityChange(e);
                }}
                onBlur={handleOutsideClick}
              />
              {cityFilled &&
                (cityValid ? (
                  <p className={styles.successMessage}>Success message for City</p>
                ) : (
                  <p className={styles.errorMessage}>City name is not valid</p>
                ))}
            </div>
          )}
        />
      </div>
    </form>
  );
};

export default CityInput;
