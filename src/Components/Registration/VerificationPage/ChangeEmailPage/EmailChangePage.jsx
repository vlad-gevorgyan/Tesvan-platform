import React from 'react';
import style from './EmailChangePage.module.css'
import Bg1 from '../../../../images/Registration/bg1.svg'
import RegGirl from '../../../../images/Registration/RegGirl.svg'
import AppStore from '../../../../images/Links/appstore.svg'
import GoogleStore from '../../../../images/Links/googleplay.svg'
import EmailChange from '../../../../images/Registration/emailChange.svg'
import ChangeEmailForm from '../../HookForms/ChangeEmailForm/ChangeEmailForm';

function EmailChangePage({onPreviewClick}) {

  
  return (
    <div className={style.EmailChangePage}>
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
        <div className={style.emailChangeContainer}>
          <img className={style.emailChange} src={EmailChange}/>
          <h1 className={style.title}>Ch<span>ange email addr</span>ess</h1>
          <div>
            <ChangeEmailForm onPreviewClick={onPreviewClick}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailChangePage;