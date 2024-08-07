import React, { useState } from 'react';
import style from './VerificationPage.module.css'
import Bg1 from '../../../images/Registration/bg1.svg'
import RegGirl from '../../../images/Registration/RegGirl.svg'
import AppStore from '../../../images/Links/appstore.svg'
import GoogleStore from '../../../images/Links/googleplay.svg'
import VerifyYourEmail from './VerifyComponents/VerifyYourEmail/VerifyYourEmail';
import Check from '../../../images/Registration/check1.svg';


const VerificationPage = ({ onNextClick }) => {
  return (
    <div className={style.VerificationPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
              <h1>Verify your <span>account</span></h1>
          </div>
          <img className={style.regGirl} src={RegGirl}/>
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
        <div className={style.readinesScale}>
          <div className={style.scale1Container}>
            <div className={style.scale1Content}>
              <div className={style.circleCheck}>
                <img src={Check}/>
              </div>
              <span>Personal data</span>
            </div>
            <div className={style.scale1Content}>
              <div className={style.circleCheck}>
                <img src={Check}/>
              </div>
              <span>Knowledge</span>
            </div>         
            <div className={style.scale1Content}>
              <div className={style.circleCheck}>
                <img src={Check}/>
              </div>
              <span>Password</span>
            </div>
          </div>
          <div className={style.scale2Container}>
            <div className={style.scale}>
              <div className={style.scalefilled}></div>
            </div>
          </div>
        </div>
        <div className={style.registrationfields}>
            <VerifyYourEmail onNextClick={onNextClick} />
        </div>
      </div>
    </div>
  )
}

export default VerificationPage;
