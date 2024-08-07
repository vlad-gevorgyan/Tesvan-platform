import React from 'react';
import style from './LoginPage.module.css'
import Bg1 from '../../images/Registration/bg1.svg'
import AppStore from '../../images/Links/appstore.svg'
import GoogleStore from '../../images/Links/googleplay.svg'
import SettingGirl from '../../images/Login/sittingGirl.svg'
import Login from './LoginComponents/Login/Login';


const LoginPage = () => {
  return (
    <div className={style.LoginPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
              <h1>Welcome to <span>Tesvan</span> Platform</h1>
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
        <div className={style.loginfields}>
          <Login/>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
