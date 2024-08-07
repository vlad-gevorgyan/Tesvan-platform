import React from 'react';
import style from './EnterYourEmail.module.css'
import Bg1 from '../../../../images/Registration/bg1.svg'
import SettingGirl from '../../../../images/Login/sittingGirl.png'
import AppStore from '../../../../images/Links/appstore.svg'
import GoogleStore from '../../../../images/Links/googleplay.svg'
import PasswordEmail from '../../../../images/Login/passwordEmail.png'
import Locked from '../../../../images/Login/locked.png'
import EnterYourEmailForm from './EnterYourEmailForm/EnterYourEmailForm';
import { Link } from 'react-router-dom';


function EnterYourEmail({onNextClick}) {
  return (
    <div className={style.EnterYourEmail}>
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
            <p>To reset your password, please enter the email address associated with your account. We'll send you instructions on how to reset your password.</p>
          </div>
          <div className={style.enterYourEmailContent2}>
            <EnterYourEmailForm onNextClick={onNextClick}/>
          </div>
          <p className={style.login}>Back to <Link to='/login' className={style.linkLogin}><span>Log in</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default EnterYourEmail;