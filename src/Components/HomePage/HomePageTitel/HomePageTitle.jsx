import React from 'react';
import style from './HomePageTitle.module.css'
import Play from '../../../images/HomePage/play.svg'
import Vector1 from '../../../images/HomePage/vector1.svg'
import Vector1mob from '../../../images/HomePage/vector1mob.svg'
import Rocket from '../../../images/HomePage/rocket.svg'
import Girl1 from '../../../images/HomePage/headergirl1.svg'
import Girl1mob from '../../../images/HomePage/headergirl1mob.svg'
import { Link } from 'react-router-dom';
import MediaQuery from "react-responsive";

const HomePageTitle = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Прокрутить страницу вверх
  };

  return (
    <div>
      <MediaQuery minWidth={481}>
        <img className={style.vector1} src={Vector1} />
        <img className={style.girl1} src={Girl1} />
        <img className={style.rocketdesktop} src={Rocket}/> 
      </MediaQuery>
      <MediaQuery maxWidth={480}>
        <img className={style.rocketmobile} src={Rocket}/> 
        <img className={style.vector1mob} src={Vector1mob} />
        <img className={style.girl1mob} src={Girl1mob} />
      </MediaQuery>
      <div className={style.homePageTitleContainer}>
        <div className={style.homePageTitleContent}>
          <h1>DISCOVER A NEW WAY OF <span>E-LEARNING</span></h1>
          <p>Lorem ipsum dolor sit a<span>met, consectetuer adipiscing elit, sed diam nonu</span>mmy nibh euismod tincidunt ut.</p>
          <div className={style.homePageTitleBtns}>
            <Link to='/registration' className={style.getStatredBtnLink} onClick={scrollToTop}>
              <button className={style.getStatredBtn}>Get started</button>
            </Link>
            <button className={style.watchBtn}>
              <img src={Play}/>
              Watch how it works
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}


export default HomePageTitle