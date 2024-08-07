import React, { useState } from 'react';
import style from './VerificationErrorPage.module.css'
import Bg1 from '../../../../images/Registration/bg1.png'
import ErrorGirl from '../../../../images/Registration/errorGirl.png'
import AppStore from '../../../../images/Links/appstore.png'
import GoogleStore from '../../../../images/Links/googleplay.png'
import RegisterError from '../../../../images/Registration/registerError.png'

const VerificationErrorPage = ({ onNextClick }) => {
  return (
    <div className={style.VerificationErrorPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
            <h1>Reset your <span>password</span></h1>
          </div>
          <img className={style.errorGirl} src={ErrorGirl}/>
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
        <div className={style.invalidverificationlinkContainer}>
          <img className={style.registerError} src={RegisterError}/>
          <h1 className={style.registerErrorTitle}>Invali<span>d password recovery l</span>ink</h1>
          <div className={style.container1}>
            <p>We're sorry, but it looks like this password recovery link has already been used.</p>
          </div>
          <div className={style.container2}>
            <p>You can request a new password reset link.</p>
            <button className={style.loginbtn}>Send Reset Link</button>
          </div>
          </div>
        </div>
      </div>
  )
}

export default VerificationErrorPage;
