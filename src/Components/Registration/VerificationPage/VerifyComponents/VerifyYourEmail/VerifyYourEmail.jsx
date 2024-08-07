import React, { useState, useEffect } from 'react';
import style from './VerifyYourEmail.module.css'
import mailimage from '../../../../../images/Registration/mailimage.svg'

const VerifyYourEmail = ({ onNextClick }) => {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [firstVisit, setFirstVisit] = useState(true);

  const startCountdown = () => {
    setIsButtonActive(false);
    setCountdown(30);
  };

  useEffect(() => {
    let interval;

    if (firstVisit) {
      setIsButtonActive(false);
      setFirstVisit(false);
    } else if (!isButtonActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsButtonActive(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, isButtonActive, firstVisit]);

  const handleButtonClick = () => {
    if (isButtonActive) {
      startCountdown();
      console.log('Отсчет начался!');
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className={style.verifyEmailContainer}>
      <img className={style.mailimage} src={mailimage}/>
      <h1 className={style.title}>Verify your e<span>mail address</span></h1>
      <div  className={style.verifyEmailContent}>
        <p>We have send an email to [example.@gmail.com] to verify your email address and activate your account. The link in the email will expire in 24 hours.</p>
        <p>Click  <a onClick={onNextClick}>here</a> if you would like to change the email address you signed up with.</p>
      </div>
      <div className={style.verifyBtn}>
        <span>Not in inbox or spam folder?</span>
        <div className={style['timer-button']}>
          <button className={isButtonActive ? style.active : ''} onClick={handleButtonClick} disabled={!isButtonActive}>
            Resend link
          </button>
          {isButtonActive ? (
            <p>00:30</p>
          ) : (
            <p>{formatTime(countdown)}</p>
          )}
        </div>
      </div>
    </div>
  )
}


export default VerifyYourEmail