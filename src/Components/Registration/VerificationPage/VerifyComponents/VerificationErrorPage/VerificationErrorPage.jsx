import React, { useState } from 'react';
import style from './VerificationErrorPage.module.css'
import Bg1 from '../../../../../images/Registration/bg1.png'
import ErrorGirl from '../../../../../images/Registration/errorGirl.png'
import AppStore from '../../../../../images/Links/appstore.png'
import GoogleStore from '../../../../../images/Links/googleplay.png'
import RegisterError from '../../../../../images/Registration/registerError.png'

const VerificationErrorPage = ({ onNextClick }) => {
  return (
    <div className={style.VerificationErrorPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
              <h1>Create your <span>free</span> account</h1>
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
          <h1 className={style.registerErrorTitle}>Invali<span>d verification l</span>ink</h1>
          <div className={style.container1}>
            <p>We're sorry, but it looks like this verification link has already been used.</p>
          </div>
          <div className={style.container2}>
            <p>Lorem ipsum</p>
            <button className={style.loginbtn}>Go to homepage</button>
          </div>
          </div>
        </div>
      </div>
  )
}

export default VerificationErrorPage;
