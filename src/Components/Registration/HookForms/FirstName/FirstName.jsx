import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './FirstName.module.css';

const FirstName = ({ onUpdate, firstName: initialFirstName }) => {
  const { control, reset } = useForm();

  const [firstNameFilled, setFirstNameFilled] = useState(!!initialFirstName);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [firstName, setFirstName] = useState(initialFirstName || '');

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstNameFilled(value !== '');
    setFirstNameValid(value === '' || /^[A-Z][a-z]*$/.test(value)); 
    setFirstName(value);
  };

  const handleOutsideClick = () => {
    if (firstNameValid && firstName !== '') {
      const data = { firstName: firstName };
      reset();
      onUpdate(data);
    }
  };

  useEffect(() => {
    if (initialFirstName) {
      onUpdate({ firstName: initialFirstName });
    }
  }, [initialFirstName]);

  return (
    <form>
      <div className={styles.formContainer}>
        <label className={styles.label}>First Name:</label>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input
                {...field}
                value={firstName}
                placeholder='Your first name'
                className={`${styles.inputField} ${
                  firstNameFilled
                    ? firstNameValid
                      ? styles.success
                      : styles.error
                    : ''
                }`}
                onChange={(e) => {
                  field.onChange(e);
                  handleFirstNameChange(e);
                }}
                onBlur={handleOutsideClick}
              />
              {firstNameFilled &&
                (firstNameValid ? (
                  <p className={styles.successMessage}>Success message for First Name</p>
                ) : (
                  <p className={styles.errorMessage}>Error message for First Name</p>
                ))}
            </div>
          )}
        />
      </div>
    </form>
  );
};

export default FirstName;
