import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './EmailAdress.module.css';

const EmailAddress = ({ onUpdate, email: initialEmail }) => {
  const {
    register,
    formState: { errors },
    reset,
    control
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: initialEmail || '',
    },
  });

  const handleBlur = (data) => {
    onUpdate(data);
  };

  const [emailValid, setEmailValid] = useState(true);
  const [emailFilled, setEmailFilled] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValid(
      value === '' ||
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)
    );
    setEmailFilled(value !== '');
  };

  return (
    <div className={styles.email}>
      <form>
        <label>
          <p className={styles.title}>Email address</p>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              },
            }}
            render={({ field }) => (
              <div className={styles.inputContainer}>
                <input
                  {...field}
                  className={`${styles.inputField} ${emailFilled ? (emailValid ? styles.success : styles.error) : ''}`}
                  placeholder='johnsmith@example@com'
                  onBlur={() => handleBlur({ email: field.value })}
                  onChange={(e) => {
                    field.onChange(e);
                    handleEmailChange(e);
                  }}
                />
                {emailFilled &&
                  (emailValid ? (
                    <p className={styles.successMessage}>The email address is valid.</p>
                  ) : (
                    <p className={styles.errorMessage}>Email address is not valid</p>
                  ))}
              </div>
            )}
          />
        </label>
      </form>
    </div>
  );
};

export default EmailAddress;
