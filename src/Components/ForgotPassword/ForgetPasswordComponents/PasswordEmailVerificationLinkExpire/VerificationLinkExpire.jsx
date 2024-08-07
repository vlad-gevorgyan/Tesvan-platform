import React, { useState } from 'react';
import style from './VerificationLinkExpire.module.css'
import Bg1 from '../../../../images/Registration/bg1.png'
import ErrorGirl from '../../../../images/Registration/errorGirl.png'
import AppStore from '../../../../images/Links/appstore.png'
import GoogleStore from '../../../../images/Links/googleplay.png'
import Time from '../../../../images/Registration/time.png'

const VerificationLinkExpire = ({ onNextClick }) => {
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
          <img className={style.time} src={Time}/>
          <h1 className={style.registerErrorTitle}>Exp<span>ired lin</span>k</h1>
          <div className={style.container1}>
            <p>We're sorry, but it looks like this password recovery link has expired.</p>
          </div>
          <div className={style.container2}>
            <p>You can request new verification link</p>
            <button className={style.resendlinkBtn}>Resend link</button>
          </div>
          </div>
        </div>
      </div>
  )
}

export default VerificationLinkExpire;
