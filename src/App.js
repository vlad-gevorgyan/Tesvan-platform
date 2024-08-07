import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Registration from './Components/Registration/RegistrationPage';
import LoginPage from './Components/LogIn/LoginPage';
import ForgotPasswordPage from './Components/ForgotPassword/ForgotPasswordPage';
import MediaQuery from "react-responsive";
import MobileNavbar from './Components/Header/MobileNavbar/MobileNavbar';

function App() {
  return (
    <div className='wrapper'>
      <MediaQuery minWidth={481}>
        <Header />
      </MediaQuery>
      <MediaQuery maxWidth={480}>
        <MobileNavbar/>
      </MediaQuery>
      <div className='wrapper-content'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/login' element={<LoginPage />}/> 
          <Route path='/forgotPasswordPage' element={<ForgotPasswordPage />}/> 
        </Routes> 
      </div>
      <Footer/>
    </div>
  )
}

export default App;
