import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './GenderForm.module.css';

const GenderForm = ({ onUpdate, gender: initialGender }) => {
  const { register } = useForm();
  const [selectedGender, setSelectedGender] = useState(initialGender || null)

  const handleRadioChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGender(selectedValue); 
    onUpdate({ gender: selectedValue }); 
  };

  return (
    <div className={styles.FormContainer}>
      <p className={styles.title}>Gender</p>
      <form className={styles.form}>
        <label className={styles.label}>
          <input
            type="radio"
            value="male"
            {...register('gender', { required: true })}
            onChange={handleRadioChange}
            checked={selectedGender === 'male'}
          />
          <span className={styles.radioButton}>Male</span>
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            value="female"
            {...register('gender', { required: true })}
            onChange={handleRadioChange}
            checked={selectedGender === 'female'}
          />
          <span className={styles.radioButton}>Female</span>
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            value="other"
            {...register('gender', { required: true })}
            onChange={handleRadioChange}
            checked={selectedGender === 'other'}
          />
          <span className={styles.radioButton}>Other</span>
        </label>
      </form>
    </div>
  );
};

export default GenderForm;
