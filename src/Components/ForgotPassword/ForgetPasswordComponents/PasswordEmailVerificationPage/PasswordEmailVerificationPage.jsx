import React, { useState, useEffect } from 'react';
import style from './PasswordEmailVerificationPage.module.css'
import Bg1 from '../../../../images/Registration/bg1.svg'
import SettingGirl from '../../../../images/Login/sittingGirl.png'
import AppStore from '../../../../images/Links/appstore.svg'
import GoogleStore from '../../../../images/Links/googleplay.svg'
import PasswordEmail from '../../../../images/Login/passwordEmail.png'
import Locked from '../../../../images/Login/locked.png'
import { Link } from 'react-router-dom';


function PasswordEmailVerificationPage({onPreviewClick}) {
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
      setIsButtonActive(true); // Восстанавливаем активность кнопки после окончания отсчета
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
    <div className={style.PasswordEmailVerificationPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
              <h1>Reset your <span>password</span></h1>
          </div>
          <img className={style.settingGirl} src={SettingGirl}/>
          <div className={style.storeContainer}>
            <p>Download our app</p>
            <div className={style.store}>
              <img src={AppStore} />
              <img src={GoogleStore} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.ContainerRight}>
        <div className={style.enterYourEmailContainer}>
          <div className={style.images}>
            <img className={style.passwordEmail} src={PasswordEmail}/>
            <img className={style.locked} src={Locked}/>
          </div>
          <div className={style.enterYourEmailContent1}>
            <h1>Forgot pas<span>sword</span></h1>
            <p>We've received your request to reset your password. Please check your  [example.@gmail.com] email inbox for further instructions on how to reset your password.</p>
            <p>Click <span onClick={onPreviewClick} className={style.linkHere}>here</span> if you would like to change the email address you entered to reset password.</p>
          </div>
          <div className={style.enterYourEmailContent2}>
            <div className={style.verifyBtn}>
              <span>Not in inbox or spam folder?</span>
              <div className={style['timer-button']}>
                <button className={isButtonActive ? style.active : ''} onClick={handleButtonClick} disabled={!isButtonActive}>
                  Resend email
                </button>
                {isButtonActive ? (
                  <p>00:30</p>
                ) : (
                  <p>{formatTime(countdown)}</p>
                )}
              </div>
            </div>
          </div>
          <p className={style.login}>Back to <Link to='/login' className={style.linkLogin}>Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default PasswordEmailVerificationPage;