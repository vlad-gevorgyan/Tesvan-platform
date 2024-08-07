import React, { useState } from 'react';
import styles from './YesNoForm.module.css';

const YesNoForm = ({ onUpdate, backgroundInQA: initialbackgroundInQA }) => {
  const [choice, setChoice] = useState(initialbackgroundInQA || null);

  const handleChoiceChange = (selectedChoice) => {
    setChoice(selectedChoice);
    onUpdate({ backgroundInQA: selectedChoice });
  };

  return (
    <div className={styles.FormContainer}>
      <p className={styles.title}>Do you have a background in QA?</p>
      <div className={styles.form}>
        <label className={styles.label}>
          <input
            type="radio"
            value="yes"
            checked={choice === 'yes'}
            onChange={() => handleChoiceChange('yes')}
          />
          <span className={styles.radioButton}>Yes</span>
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            value="no"
            checked={choice === 'no'}
            onChange={() => handleChoiceChange('no')}
          />
          <span className={styles.radioButton}>No</span>
        </label>
      </div>
    </div>
  );
};

export default YesNoForm;
