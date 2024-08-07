import React, { useState } from 'react';
import style from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../../../images/auth_img.svg';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={style.nav}>
      <div className={style.items}>
        <div className={style.item}>
          <NavLink to="/" className={style.item} onClick={scrollToTop}>
            Platform
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/courses" className={style.item} onClick={scrollToTop}>
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
              <NavLink to="/about" className={style.dropdownItem} onClick={scrollToTop}>
                About
              </NavLink>
              <NavLink to="/faq" className={style.dropdownItem} onClick={scrollToTop}>
                FAQ
              </NavLink>
              <NavLink to="/contact" className={style.dropdownItem} onClick={scrollToTop}>
                Contact Us
              </NavLink>
            </div>
          )}
        </div>
        <div className={style.item}>
          <NavLink to="/blog" className={style.item} onClick={scrollToTop}>
            Blog
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/joinUs" className={style.item} onClick={scrollToTop}>
            Join us
          </NavLink>
        </div>
      </div>
      <div>
        <Link to="/login" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
          <div className={style.login}>
            <span>Log In</span>
            <img className={style.auth} src={Auth} alt="Authentication" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
