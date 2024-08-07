import React, { useState, useEffect } from 'react';
import style from './Knowledge.module.css'
import Bg1 from '../../../images/Registration/bg1.svg'
import RegGirl from '../../../images/Registration/RegGirl.svg'
import AppStore from '../../../images/Links/appstore.svg'
import GoogleStore from '../../../images/Links/googleplay.svg'
import Check from '../../../images/Registration/check1.svg'
import { Link } from 'react-router-dom';
import EnglishLevelSelector from '../HookForms/EnglishLevelSelector/EnglishLevelSelector';
import StudyLocationSelector from '../HookForms/StudyLocationSelector/StudyLocationSelector';
import YesNoForm from '../HookForms/YesNoForm/YesNoForm';
import { useFormData } from '../FormDataContext';

const KnowledgePage = ({ onPreviewClick, onNextClick  }) => {
  const { formData, setFormData } = useFormData();

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isComplete =
      formData.englishLevel &&
      formData.education &&
      formData.backgroundInQA;
    setIsFormComplete(isComplete);
  }, [formData]);

  const handleFormDataUpdate = (newData) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    console.log(updatedData);
  };

  return (
    <div className={style.KnowledgePage}>
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
              <div className={style.circleactive}>
                2
              </div>
              <span>Knowledge</span>
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
          <div className={style.selectors}>
          <EnglishLevelSelector onUpdate={handleFormDataUpdate} selectedEnglishLevel={formData.englishLevel}/>
          <StudyLocationSelector onUpdate={handleFormDataUpdate} selectedLocation={formData.education}/>
          </div>
          <YesNoForm onUpdate={handleFormDataUpdate} backgroundInQA={formData.backgroundInQA}/>
        </div>
        <div className={style.buttons}>
            <button className={style.previewbtn} onClick={onPreviewClick}>Previews step</button>
            <button className={style.nextbtn} onClick={onNextClick} disabled={!isFormComplete}>Next step</button>
        </div>
        <div className={style.login}>
          <p>Already have an account?</p>
          <Link to='/login' className={style.loginLink}><span>Log in</span></Link>
        </div>
      </div>
    </div>
  )
}

export default KnowledgePage;