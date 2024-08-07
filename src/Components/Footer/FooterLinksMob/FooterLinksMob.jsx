import React, { useState } from 'react';
import style from './FooterLinksMob.module.css';
import { NavLink } from 'react-router-dom';
import FlagArm from '../../../images/Flags/flagArm.png'
import GoogleStore from '../../../images/Links/googleplay.png'
import AppStore from '../../../images/Links/appstore.png'

const FooterLinksMob = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isDropdownActive = (index) => activeIndex === index;


  return  (
    <nav className={style.nav}>
      <div className={`${style.item} ${isDropdownActive(0) ? style.active : ''}`}>
          <span className={style.dropdownTrigger} onClick={() => toggleDropdown(0)}>
            Categories
            <div className={style.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isDropdownActive(0) ? style.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            </span>
            {isDropdownActive(0) && (
              <div className={style.dropdown}>
                <NavLink to='/platform' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Platform
                </NavLink>
                <NavLink to="/Courses" className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Courses
                </NavLink>
                <NavLink to="/aboutus" className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  About us
                </NavLink>
                <NavLink to="/faq" className={style.dropdownItem} onClick={() => { toggleDropdown();}}>
                  FAQ
                </NavLink>
                <NavLink to="/contactus" className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Contact us
                </NavLink>
                <NavLink to="/Careers" className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Careers
                </NavLink>
              </div>
            )}
      </div>
      <div className={`${style.item} ${isDropdownActive(1) ? style.active : ''}`}>
          <span className={style.dropdownTrigger} onClick={() => toggleDropdown(1)}>
            Interview
            <div className={style.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isDropdownActive(1) ? style.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            </span>
            {isDropdownActive(1) && (
              <div className={style.dropdown}>
                <NavLink to='/interviewrequest' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Interview request
                </NavLink>
                <NavLink className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Lorem ipsum dolor sit amet, the consectetuer.
                </NavLink>
              </div>
            )}
      </div>
      <div className={`${style.item} ${isDropdownActive(2) ? style.active : ''}`}>
          <span className={style.dropdownTrigger} onClick={() => toggleDropdown(2)}>
            Free education
            <div className={style.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isDropdownActive(2) ? style.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            </span>
            {isDropdownActive(2) && (
              <div className={style.dropdown}>
                <NavLink to='/freeeducationalmaterials' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Free educational materials
                </NavLink>
                <NavLink to='tesvanblog' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Tesvan blog
                </NavLink>
              </div>
            )}
      </div>
      <div className={`${style.item} ${isDropdownActive(3) ? style.active : ''}`}>
          <span className={style.dropdownTrigger} onClick={() => toggleDropdown(3)}>
            Legal Information
            <div className={style.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isDropdownActive(3) ? style.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            </span>
            {isDropdownActive(3) && (
              <div className={style.dropdown}>
                <NavLink to='/termsofuse' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Terms of use
                </NavLink>
                <NavLink to='privacypolicy' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Privacy policy
                </NavLink>
                <NavLink to='cookiesettings' className={style.dropdownItem} onClick={() => {toggleDropdown();}}>
                  Cookie settings
                </NavLink>
              </div>
            )}
      </div>
      <div className={`${style.item} ${isDropdownActive(4) ? style.active : ''}`}>
          <span className={style.dropdownTrigger} onClick={() => toggleDropdown(4)}>
            Contacts
            <div className={style.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isDropdownActive(4) ? style.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            </span>
            {isDropdownActive(4) && (
              <div className={style.dropdown}>
                <div className={style.contacts}>
                  <div className={style.phoneNumber}> 
                    <img src={FlagArm}></img> 
                    <span>+(374) 91 75 19 00</span>
                  </div>
                  <div>sayhello@tesvan.com</div>
                  <div>Armenia</div>
                </div>
              </div>
            )}
      </div>
      <div className={style.store}>
          <img src={AppStore} />
          <img src={GoogleStore} />
      </div>
    </nav>
  )
}


export default FooterLinksMob;