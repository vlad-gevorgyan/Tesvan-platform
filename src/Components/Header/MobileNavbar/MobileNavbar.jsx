import React, { useState, useEffect } from 'react';
import style from './MobileNavbar.module.css';
import Frame from '../../../images/Frame.png'
import Burger from '../../../images/burger.png'
import Auth from '../../../images/auth_img.svg'
import { Link, NavLink } from 'react-router-dom';
import LanguageSelector from '../Language_Selector/Language-Selector';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const languages = [
    { code: 'English', name: 'English' },
    { code: 'Armeian', name: 'Armeian' },
    { code: 'Russian', name: 'Russian' },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto';
    }
  };


  useEffect(() => {
    const handleScroll = () => {

      const scrollY = window.scrollY;

      if (scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`${style.navbar} ${isOpen ? style.open : ''} ${scrolling ? style.scrolled : ''}`}>
      <div className={style.navbarBrand}>
        <div className={style.navbarLogo}>
          <Link to='/' className={style.framelink}><img className={style.frame} src={Frame}/></Link>
        </div>
        <button className={style.navbarToggler} onClick={toggleNavbar}>
          <img className={style.burger} src={Burger} />
        </button>
      </div>
      <div className={`${style.navbarLinks} ${isOpen ? style.active : ''}`}>
        <div className={style.items}>
          <div className={style.item}>
            <NavLink to="/" className={style.item} onClick={toggleNavbar}>
              Platform
            </NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/courses" className={style.item} onClick={toggleNavbar}>
              Courses
            </NavLink>
          </div>
          <div className={`${style.item} ${dropdownVisible ? style.active : ''}`}>
          <span className={style.dropdownTrigger} onClick={toggleDropdown}>
            Company
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
                className={dropdownVisible ? style.rotate : ''}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            </span>
            {dropdownVisible && (
              <div className={style.dropdown}>
                <NavLink to="/about" className={style.dropdownItem} onClick={() => {toggleNavbar(); toggleDropdown();}}>
                  About
                </NavLink>
                <NavLink to="/faq" className={style.dropdownItem} onClick={() => {toggleNavbar(); toggleDropdown();}}>
                  FAQ
                </NavLink>
                <NavLink to="/contact" className={style.dropdownItem} onClick={() => {toggleNavbar(); toggleDropdown();}}>
                  Contact Us
                </NavLink>
              </div>
            )}
          </div>
          <div className={style.item}>
            <NavLink to="/blog" className={style.item} onClick={toggleNavbar}>
              Blog
            </NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/joinUs" className={style.item} onClick={toggleNavbar}>
              Join us
            </NavLink>
          </div>
        </div>
        <div className={style.languageSelector}>
          <LanguageSelector languages={languages}/>
        </div>
        <div className={style.navbarBtns}>
        <Link>
        <button className={style.InterviewRequest} onClick={toggleNavbar}>Interview request</button>
        </Link>
        <Link to='/login' className={style.logInLink} onClick={toggleNavbar}>
          <button className={style.logIn}>
            <p>Log in</p>
            <img className={style.auth} src={Auth}/>
          </button>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
