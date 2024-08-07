import React, { useState, useEffect } from 'react';
import style from './PersonalData.module.css'
import Bg1 from '../../../images/Registration/bg1.svg'
import RegGirl from '../../../images/Registration/RegGirl.svg'
import AppStore from '../../../images/Links/appstore.svg'
import GoogleStore from '../../../images/Links/googleplay.svg'
import EmailAdress from '../HookForms/Email addres/EmailAdress';
import PhoneNumberForm from '../HookForms/PhoneNumber/PhoneNumberForm';
import DateSelectionForm from '../HookForms/Date/DateSelectionForm';
import GenderForm from '../HookForms/Gender/GenderForm';
import CountrySelector from '../HookForms/Country/CountrySelector';
import CityInput from '../HookForms/City/CityInput';
import { Link } from 'react-router-dom';
import FirstName from '../HookForms/FirstName/FirstName';
import LastName from '../HookForms/LastName/LastName';
import { useFormData } from '../FormDataContext';

const PersonalData = ({ onNextClick })=> {
  const { formData, setFormData } = useFormData();

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isComplete =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.birthday &&
      formData.gender &&
      formData.country &&
      formData.city;
    setIsFormComplete(isComplete);
  }, [formData]);

  const handleFormDataUpdate = (newData) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    console.log(updatedData);
  };

  return (
    <div className={style.PersonalData}>
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
              <div className={style.circleactive}>
                1
              </div>
              <span>Personal data</span>
            </div>
            <div className={style.scale1Content}>
              <div className={style.circle}>
                2
              </div>
              <p>Knowledge</p>
            </div>         
            <div className={style.scale1Content}>
              <div className={style.circle}>
                3
              </div>
              <p>Password</p>
            </div>
          </div>
          <div className={style.scale2Container}>
            <div className={style.scale}>
              <div className={style.scalefilled}></div>
            </div>
          </div>
        </div>
        <div className={style.registrationfields}>
          <div className={style.content1}>
            <FirstName onUpdate={handleFormDataUpdate} firstName={formData.firstName}/>
            <LastName onUpdate={handleFormDataUpdate} lastName={formData.lastName}/>
          </div>
          <div className={style.content2}>
            <EmailAdress onUpdate={handleFormDataUpdate} email={formData.email} />
            <PhoneNumberForm onUpdate={handleFormDataUpdate} phoneNumber={formData.phoneNumber}/>
          </div>
          <div className={style.content3}>
            <DateSelectionForm onUpdate={handleFormDataUpdate} birthday={formData.birthday}/>
            <GenderForm onUpdate={handleFormDataUpdate} gender={formData.gender}/>
          </div>
          <div className={style.content4}>
            <CountrySelector onUpdate={handleFormDataUpdate} selectedCountry={formData.country}/>
            <CityInput onUpdate={handleFormDataUpdate}  city={formData.city}/>
          </div>
        </div>
        <div className={style.buttons}>
        <button
          className={style.nextbtn}
          onClick={onNextClick}
          disabled={!isFormComplete}
        >
          Next step
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

export default PersonalData;