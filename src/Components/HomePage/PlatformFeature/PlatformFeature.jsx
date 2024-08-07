import React from 'react';
import style from './PlatformFeature.module.css'
import Icon1 from '../../../images/HomePage/icon1.svg'
import Icon2 from '../../../images/HomePage/icon2.svg'
import Icon3 from '../../../images/HomePage/icon3.svg'
import Icon4 from '../../../images/HomePage/icon4.svg'

const PlatformFeature = (props) => {
  return (
    <div className={style.platformFeatureContainer}>
      <div className={style.gradient}>
        <div className={style.platformFeatureContent}>
          <div className={style.contentContainerGradient}>
            <div className={style.contentContainer}>
              <div className={style.title}>
                <img src={Icon1}/>
                <p>Interactive courses</p>
              </div>
              <div className={style.description}>
                <p>Lorem ipsum dolor sit amet, and lorem the some consectetuer</p>
              </div>
            </div>
          </div>
          <div className={style.contentContainerGradient}>
            <div className={style.contentContainer}>
              <div className={style.title}>
                <img src={Icon2}/>
                <p>Interview preparations</p>
              </div>
              <div className={style.description}>
                <p>Lorem ipsum dolor sit amet, and lorem the some consectetuer</p>
              </div>
            </div>
          </div>
          <div className={style.contentContainerGradient}>
            <div className={style.contentContainer}>
              <div className={style.title}>
                <img src={Icon3}/>
                <p>Certification</p>
              </div>
              <div className={style.description}>
                <p>Lorem ipsum dolor sit amet, and lorem the some consectetuer</p>
              </div>
            </div>
          </div>
          <div className={style.contentContainerGradient}>
            <div className={style.contentContainer}>
              <div className={style.title}>
                <img src={Icon4}/>
                <p>Job opportunity</p>
              </div>
              <div className={style.description}>
                <p>Lorem ipsum dolor sit amet, and lorem the some consectetuer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={style.viewPlatformBtn}>View platform features</button>
    </div>
  )
}


export default PlatformFeature