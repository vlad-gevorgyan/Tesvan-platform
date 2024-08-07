import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './EnterYourEmailForm.module.css';

const EnterYourEmailForm = ({ onNextClick }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: 'onBlur',
  });

  const [emailValid, setEmailValid] = useState(true);
  const [emailFilled, setEmailFilled] = useState(false);

  const onSubmit = (newData) => {
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValid(
      value === '' ||
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)
    );
    setEmailFilled(value !== '');
  };

  const isButtonDisabled = !emailValid || !emailFilled;

  return (
    <div className={styles.email}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          <p className={styles.title}>Email</p>
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
                  className={`${styles.inputField} ${
                    emailFilled ? (emailValid ? styles.success : styles.error) : ''
                  }`}
                  placeholder="johnsmith@example.com"
                  onChange={(e) => {
                    field.onChange(e);
                    handleEmailChange(e);
                  }}
                />
                {emailFilled &&
                  (emailValid ? (
                    <p className={styles.successMessage}>Success message for Email</p>
                  ) : (
                    <p className={styles.errorMessage}>Error message for Email</p>
                  ))}
              </div>
            )}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors?.email && <p>{errors?.email?.message || ''}</p>}
        </div>
        <button
          type="submit"
          className={styles.button}
          disabled={isButtonDisabled}
          onClick={(e) => {
            e.preventDefault();
            onNextClick();
            handleSubmit(onSubmit)();
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EnterYourEmailForm;
