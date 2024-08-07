import React, { useState, useEffect, useRef } from 'react';
import styles from './PasswordForm.module.css';
import { FiEyeOff, FiEye, FiCheck } from "react-icons/fi";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { RiLockPasswordLine } from "react-icons/ri";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PasswordForm = ({ onUpdate, password: initialPassword, isConfirmPasswordVisible, setConfirmPasswordVisible }) => {
  const [password, setPassword] = useState(initialPassword || '');
  const [confirmPassword, setConfirmPassword] = useState(initialPassword || '');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordState, setPasswordState] = useState('none');
  const [confirmPasswordState, setConfirmPasswordState] = useState('none');
  const [showRules, setShowRules] = useState(false);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(null);
  
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordProgress, setPasswordProgress] = useState(0);

  const passwordInputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (passwordInputRef.current && !passwordInputRef.current.contains(event.target)) {
      setShowRules(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlePasswordInputFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordInputBlur = () => {
    setIsPasswordFocused(false);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setHasUppercase(/[A-Z]/.test(newPassword));
    setHasLowercase(/[a-z]/.test(newPassword));
    setHasNumber(/[0-9]/.test(newPassword));
    setHasSpecial(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword));
    setIsMinLength(newPassword.length >= 10);
    setShowRules(true);
    const progress = calculatePasswordProgress(newPassword);
    setPasswordProgress(progress);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordVisible(e.target.value.trim() !== '');
  };

  const calculatePasswordProgress = (newPassword) => {
    let progress = 0;
    if (/[A-Z]/.test(newPassword)) progress += 20;
    if (/[a-z]/.test(newPassword)) progress += 20;
    if (/[0-9]/.test(newPassword)) progress += 20;
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword)) progress += 20;
    if (newPassword.length >= 10) progress += 20;
    return progress;
  };

  const getColorForProgress = (progress) => {
    if (progress < 25) {
      return '#CF6679';
    } else if (progress < 50) {
      return '#CF6679';
    } else if (progress < 75) {
      return '#EB8D4A';
    } else if (progress < 100) {
      return '#EB8D4A';
    } else {
      return '#66CF8A';
    }
  };

  const checkPasswordRules = () => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    const isMinLength = password.length >= 10;
    const isPasswordValid = hasLowercase && hasUppercase && hasNumber && hasSpecial && isMinLength;
    if (isPasswordValid) {
      setPasswordState('valid');
    } else if (password === '') {
      setPasswordState('none');
    } else {
      setPasswordState('invalid');
    }
  };

  const checkConfirmPassword = () => {
    if (confirmPassword === password && confirmPassword !== '') {
      setConfirmPasswordIcon(<FiCheck className={`${styles.Checkicon}`} />);
      setConfirmPasswordState('valid');
    } else if (confirmPassword === '') {
      setConfirmPasswordIcon(null);
      setConfirmPasswordState('none');
    } else {
      setConfirmPasswordIcon(null);
      setConfirmPasswordState('invalid');
    }
  };

  useEffect(() => {
    checkPasswordRules();
  }, [password]);

  useEffect(() => {
    checkConfirmPassword();
  }, [confirmPassword]);

  const handleConfirmPasswordBlur= () => {
    if (confirmPassword === password && confirmPassword.trim() !== '') {
      onUpdate({ password });
    }
  };

  return (
    <form  className={styles.form}>
      <div className={styles.containerAndTitle}>
        <p className={styles.title}>Password</p>
        <div className={`${styles.passwordContainer1} ${
          passwordState === 'valid' ? styles.valid : ''} ${
          passwordState === 'invalid' ? styles.invalid : ''}`}>
          <div
            className={styles.iconWrapper}
            onMouseEnter={() => setShowRules(true)}
          >
            {isPasswordFocused ? (
              <CircularProgressbar
                value={passwordProgress}
                styles={buildStyles({
                  pathColor: getColorForProgress(passwordProgress),
                  textColor: getColorForProgress(passwordProgress),
                })}
              />
            ) : (
              passwordState === 'valid' ? (
                <FiCheck className={`${styles.Checkicon}`} />
              ) : passwordState === 'invalid' ? (
                <HiOutlineExclamationTriangle className={`${styles.Triangleicon}`} />
              ) : (
                <RiLockPasswordLine className={`${styles.icon} ${styles.lockIcon}`} />
              )
            )}
            {showRules && (
              <div className={styles.tooltip}>
                <div className={styles.Triangle}></div>
                <ul>
                  <li className={hasLowercase ? styles.livalid : styles.liinvalid}>Lowercase character</li>
                  <li className={hasUppercase ? styles.livalid : styles.liinvalid}>Uppercase character</li>
                  <li className={hasNumber ? styles.livalid : styles.liinvalid}>Number</li>
                  <li className={hasSpecial ? styles.livalid : styles.liinvalid}>Special character</li>
                  <li className={isMinLength ? styles.livalid : styles.liinvalid}>10 character minimum</li>
                </ul>
              </div>
            )}
          </div>
          <input
            type={showPassword1 ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordInputFocus}
            onBlur={handlePasswordInputBlur}
            placeholder="Create a strong password"
            className={`${styles.passwordInput}`}
            ref={passwordInputRef}
          />
          {showPassword1 ? (
            <FiEye className={styles.eyeIcon} onClick={togglePasswordVisibility1} />
          ) : (
            <FiEyeOff className={styles.eyeIcon} onClick={togglePasswordVisibility1} />
          )}
        </div>
      </div>

      <div className={styles.containerAndTitle}>
        <p className={styles.title}>Confirm password</p>
        <div  className={`${styles.passwordContainer2} ${
          confirmPasswordState === 'valid' ? styles.valid : ''} ${
          confirmPasswordState === 'invalid' ? styles.invalid : ''}`}>
          <div className={`${isConfirmPasswordVisible ? styles.visible : ''}`}>
            {confirmPasswordState === 'valid' ? (
              <FiCheck className={`${styles.Checkicon}`} />
            ) : confirmPasswordState === 'invalid' ? (
              <HiOutlineExclamationTriangle className={`${styles.Triangleicon}`} />
            ) : (
              ''
            )}
          </div>
          <input
            type={showPassword2 ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Please re-enter your password"
            className={`${styles.passwordInput}`}
            onBlur={handleConfirmPasswordBlur}
          />
          {showPassword2 ? (
            <FiEye className={styles.eyeIcon} onClick={togglePasswordVisibility2} />
          ) : (
            <FiEyeOff className={styles.eyeIcon} onClick={togglePasswordVisibility2} />
          )}
        </div>
      </div>
    </form>
  );
};

export default PasswordForm;
