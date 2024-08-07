import React, { useState } from 'react';
import style from './VerificationSuccessPage.module.css'
import Bg1 from '../../../../../images/Registration/bg1.png'
import SuccessGirl from '../../../../../images/Registration/successGirl.png'
import AppStore from '../../../../../images/Links/appstore.png'
import GoogleStore from '../../../../../images/Links/googleplay.png'
import RegisterSuccess from '../../../../../images/Registration/registerSuccess.png'
import { Link } from 'react-router-dom';

const VerificationSuccessPage = ({ onNextClick }) => {
  return (
    <div className={style.VerificationSuccessPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
              <h1>Create your <span>free</span> account</h1>
          </div>
          <img className={style.successGirl} src={SuccessGirl}/>
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
        <div className={style.congratulationContainer}>
          <img className={style.registerSuccess} src={RegisterSuccess}/>
          <h1 className={style.registerSuccessTitle}>Co<span>ngratu</span>lation!</h1>
          <div className={style.container1}>
            <p>Your account has been successfully verified. Thank you for completing the verification process. You may now access all of the features and services available to our registered users.</p>
          </div>
          <div className={style.container2}>
            <p>Please login to continue</p>
            <Link to='/login'><button className={style.loginbtn}>Log in</button></Link>
          </div>
          </div>
        </div>
      </div>
  )
}

export default VerificationSuccessPage;
