import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import Frame from '../../images/Frame.png'
import Line from '../../images/Line.png'
import LanguageSelector from './Language_Selector/Language-Selector';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const languages = [
    { code: 'EN', name: 'EN' },
    { code: 'ARM', name: 'ARM' },
    { code: 'RU', name: 'RU' },
  ];

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return(
    <navbar className={`${style.navbar} ${scrolling ? style.scrolled : ''}`}>
    <div className={style.navbarContainer}>
      <div className={style.navbarContainer1}>
        <div className={style.navbarLogo}>
          <Link to='/' className={style.framelink} onClick={scrollToTop}><img className={style.frame} src={Frame}/></Link>
        </div>
        <Navbar/>
      </div>
      <div className={style.navbarContainer2}>
        <button className={style.interviewRequestBtn}>Interview request</button> 
        <img className={style.line} src={Line}/>
        <LanguageSelector languages={languages}/>
      </div>
    </div>
  </navbar>
  )
}


export default Header;