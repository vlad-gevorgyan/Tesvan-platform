import React, { useState } from 'react';
import style from './RegistrationPage.module.css'
import { FormDataProvider } from './FormDataContext';
import PersonalData from './PersonalData/PersonalData';
import KnowledgePage from './Knowledge/KnowledgePage';
import PasswordPage from './PasswordPage/PasswordPage';
import VerificationPage from './VerificationPage/VerificationPage';
import EmailChangePage from './VerificationPage/ChangeEmailPage/EmailChangePage'
import ChangeEmailForm from './HookForms/ChangeEmailForm/ChangeEmailForm';
// import VerificationSuccessPage from './VerificationPage/VerifyComponents/VerificationSuccessPage/VerificationSuccessPage';
// import VerificationErrorPage from './VerificationPage/VerifyComponents/VerificationErrorPage/VerificationErrorPage';
// import VerificationLinkExpire from './VerificationPage/VerifyComponents/VerificationLinkExpire/VerificationLinkExpire';

const Registration = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleNextClick = () => {
    window.scrollTo(0, 0);
    setActiveComponent(activeComponent + 1);
  };

  const handlePreviewClick = () => {
    window.scrollTo(0, 0);
    setActiveComponent(activeComponent - 1);
  };
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className={style.registrationContainer}>
      <FormDataProvider>
        {activeComponent === 1 && <PersonalData onNextClick={handleNextClick} />}
        {activeComponent === 2 && <KnowledgePage onNextClick={handleNextClick} onPreviewClick={handlePreviewClick} />}
        {activeComponent === 3 && <PasswordPage onNextClick={handleNextClick} onPreviewClick={handlePreviewClick} isConfirmPasswordVisible={isConfirmPasswordVisible}
                        setConfirmPasswordVisible={setConfirmPasswordVisible} />}
        {activeComponent === 4 && <VerificationPage onNextClick={handleNextClick}/>}
        {activeComponent === 5 && <EmailChangePage onPreviewClick={handlePreviewClick}/>}
        {activeComponent === 6 && <ChangeEmailForm onPreviewClick={handlePreviewClick}/>}
      </FormDataProvider>
    </div>
  )
}

export default Registration;