import React from 'react';
import style from './OurExperts.module.css'
import Expert from '../../../images/HomePage/expert1.svg'
import MediaQuery from "react-responsive";

const OurExperts = (props) => {
  return(
    <div className={style.ourExpertscontainer}>
      <div className={style.ourExpertscontent}>
        <div className={style.titleAndInfo}>
          <h1>Ou<span>r Expe</span>rts</h1>
          <div className={style.infocontainer}>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <p>Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
        </div>
        <div className={style.expertsImages}>
          <MediaQuery maxWidth={480}>
          <div className={style.expertImg}>
            <img src={Expert}/>
          </div>
          </MediaQuery>
          <div className={style.expertImg}>
            <img src={Expert}/>
          </div>
          <div className={style.expertImg}>
            <img src={Expert}/>
          </div>
          <div className={style.gradient}>
            <div className={style.aboutUs}>
              <p>About us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurExperts