import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './LastName.module.css';

const LastName = ({ onUpdate, lastName: initialLastName }) => {
  const { control, reset } = useForm();

  const [lastNameFilled, setLastNameFilled] = useState(!!initialLastName);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [lastName, setLastName] = useState(initialLastName || '');

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastNameFilled(value !== '');
    setLastNameValid(value === '' || /^[A-Z][a-z]*$/.test(value));
    setLastName(value);
  };

  const handleOutsideClick = () => {
    if (lastNameValid && lastName !== '') {
      const data = { lastName: lastName };
      reset();
      onUpdate(data);
    }
  };

  useEffect(() => {
    if (initialLastName) {
      onUpdate({ lastName: initialLastName });
    }
  }, [initialLastName]);

  return (
    <form>
      <div className={styles.formContainer}>
        <label className={styles.label}>Last Name:</label>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input
                {...field}
                value={lastName}
                placeholder='Your last name'
                className={`${styles.inputField} ${
                  lastNameFilled
                    ? lastNameValid
                      ? styles.success
                      : styles.error
                    : ''
                }`}
                onChange={(e) => {
                  field.onChange(e);
                  handleLastNameChange(e);
                }}
                onBlur={handleOutsideClick}
              />
              {lastNameFilled &&
                (lastNameValid ? (
                  <p className={styles.successMessage}>Success message for Last Name</p>
                ) : (
                  <p className={styles.errorMessage}>Error message for Last Name</p>
                ))}
            </div>
          )}
        />
      </div>
    </form>
  );
};

export default LastName;
