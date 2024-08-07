import React from 'react';
import style from './FooterLinks.module.css';
import { NavLink } from 'react-router-dom';
import FlagArm from '../../../images/Flags/flagArm.png'
import GoogleStore from '../../../images/Links/googleplay.png'
import AppStore from '../../../images/Links/appstore.png'

const FooterLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return  (
    <nav className={style.nav}>
      <div className={style.categories1}>
        <p>Categories</p>
        <div className={style.item}> 
        <NavLink to='/' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Platform</NavLink>
        </div>
        <div className={style.item}> 
          <NavLink to='/courses' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Courses</NavLink>
        </div>
        <div className={style.item}> 
          <NavLink to='/aboutUs' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>About us</NavLink>
        </div>
        <div className={style.item}> 
          <NavLink to='/faq' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>FAQ</NavLink>
        </div>
        <div className={style.item}> 
          <NavLink to='/contactUs' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Contact us</NavLink>
        </div>
        <div className={style.item}> 
          <NavLink to='/careers' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Careers</NavLink>
        </div>
      </div>
      <div className={style.categories2}>
        <div className={style.interview}>
          <p>Interview</p>
          <div className={style.item}> 
            <NavLink to='/interviewRequest' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Interview request</NavLink>
          </div>
        </div>
        <div className={style.eduction}>
          <p>Free education</p>
          <div className={style.item}> 
            <NavLink to='/freeEducationalMaterials' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Free educational materials</NavLink>
          </div>
          <div className={style.item}> 
            <NavLink to='/tesvanBlog' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Tesvan blog</NavLink>
          </div>
        </div>
      </div>
      <div className={style.categoriesAndStore}>
        <div className={style.categories3and4}>
          <div className={style.categories3}>
            <p>Legal Information</p>
            <div className={style.item}> 
              <NavLink to='/termsOfUse' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Terms of use</NavLink>
            </div>
            <div className={style.item}> 
              <NavLink to='/privacyPolicy' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Privacy policy</NavLink>
            </div>
            <div className={style.item}> 
              <NavLink to='/cookieSettings' className = { navData => navData.isActive ? style.active : style.item } onClick={scrollToTop}>Cookie settings</NavLink>
            </div>
          </div>
          <div className={style.categories4}>
            <p>Contacts</p>
            <div className={style.phoneNumber}> 
              <img src={FlagArm}></img> 
              <span>+(374) 91 75 19 00</span>
            </div>
            <span>sayhello@tesvan.com</span>
            <span>Armenia</span>
          </div>
        </div>
        <div className={style.store}>
          <img src={AppStore} />
          <img src={GoogleStore} />
        </div>
      </div>
    </nav>
  )
}


export default FooterLinks;