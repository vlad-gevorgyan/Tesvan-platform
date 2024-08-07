import React, { useState } from 'react';
import style from './ForgotPasswordPage.module.css'
import EnterYourEmail from './ForgetPasswordComponents/EnterYourEmail/EnterYourEmail';
import PasswordEmailVerificationPage from './ForgetPasswordComponents/PasswordEmailVerificationPage/PasswordEmailVerificationPage';
// import VerificationSuccessPage from './ForgetPasswordComponents/PasswordEmailVerificationSuccessPage/VerificationSuccessPage';
// import VerificationErrorPage from './ForgetPasswordComponents/PasswordEmailVerificationErrorPage/VerificationErrorPage';
// import VerificationLinkExpire from './ForgetPasswordComponents/PasswordEmailVerificationLinkExpire/VerificationLinkExpire';

function ForgotPasswordPage() {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleNextClick = () => {
    setActiveComponent(activeComponent + 1);
  };

  const handlePreviewClick = () => {
    setActiveComponent(activeComponent - 1);
  };


  return (
    <div className={style.forgotPasswordPageContainer}>
        {activeComponent === 1 && <EnterYourEmail onNextClick={handleNextClick} />}
        {activeComponent === 2 && <PasswordEmailVerificationPage onPreviewClick={handlePreviewClick}/>}
    </div>
  )
}

export default ForgotPasswordPage;