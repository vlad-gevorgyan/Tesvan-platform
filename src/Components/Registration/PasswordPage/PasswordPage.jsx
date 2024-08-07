import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import { useFormData } from '../FormDataContext';
import PasswordForm from '../HookForms/Password/PasswordForm';

import style from './PasswordPage.module.css';
import Bg1 from '../../../images/Registration/bg1.svg';
import RegGirl from '../../../images/Registration/RegGirl.svg';
import AppStore from '../../../images/Links/appstore.svg';
import GoogleStore from '../../../images/Links/googleplay.svg';
import Check from '../../../images/Registration/check1.svg';

const PasswordPage = ({ onPreviewClick, onNextClick, isConfirmPasswordVisible,
  setConfirmPasswordVisible}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { formData, setFormData } = useFormData();
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const isNextButtonDisabled = !isChecked || !isFormComplete;

  useEffect(() => {
    const isComplete =
      formData.password;
    setIsFormComplete(isComplete);
  }, [formData]);

  const handleFormDataUpdate = (newData) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    console.log(updatedData);
    
  };

  


  return (
    <div className={style.PasswordPage}>
      <div className={style.ContainerLeft}>
        <img className={style.bg1} src={Bg1}/>
        <div className={style.leftcontent}>
          <div className={style.title}>
              <h1>Create your <span>free</span> account</h1>
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
              <div className={style.circleactive}>
                3
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
          <PasswordForm onUpdate={handleFormDataUpdate} 
                        password={formData.password}     
                        isConfirmPasswordVisible={isConfirmPasswordVisible}
                        setConfirmPasswordVisible={setConfirmPasswordVisible}/>
          <div className={style.teamOfUseAndPrivacyPolicy}>
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              sx={{
                color: yellow[700],
                '&.Mui-checked': {
                  color: yellow[700],
                },
                '& .MuiSvgIcon-root': {
                  width: window.innerWidth > 480 ? '1.56vw' : '6.6vw',
                  height: window.innerWidth > 480 ? '1.56vw' : '6.6vw',
                  marginTop: window.innerWidth > 480 ? '0' : '-4vw',
                },
              }}
            />
            <p>By selecting the checkbox, you agree to our <Link to='' className={style.link}>Terms of use</Link> and <Link to='' className={style.link}>Privacy Policy</Link>.</p>
          </div>
        </div>
        <div className={style.buttons}>
        <button 
          className={style.previewbtn} 
          onClick={onPreviewClick}>
          Previews step
        </button>
        <button
          className={style.nextbtn}
          onClick={onNextClick}
          disabled={isNextButtonDisabled}
        >
          Submit
        </button>
        </div>
        <div className={style.login}>
          <p>Already have an account?</p>
          <Link to='/login' className={style.loginLink}><span>Log in</span></Link>
        </div>
      </div>
    </div>
  )
}

export default PasswordPage;