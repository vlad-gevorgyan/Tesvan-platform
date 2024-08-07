import React from 'react';
import style from './LearningType.module.css'
import Group from "../../../images/HomePage/group.svg";
import Individual from "../../../images/HomePage/individual.svg";
import ComingSoon from "../../../images/HomePage/comingSoon.svg";
import Ticksquare from "../../../images/HomePage/ticksquare.svg";
import UpGirl from "../../../images/HomePage/upgirl.svg";
import MediaQuery from "react-responsive";
import LearningTypeMob from './LearningTypeMob/LearningTypeMob';

const LearningType = (props) => {
  return(
    <div className={style.learningTypeContainer}>
      <div className={style.learningTypeContent}>
        <h1>Choose y<span>our learning ty</span>pe</h1>
        <MediaQuery minWidth={481}>
          <div className={style.learningTypeCards}>
            <div className={style.gradient1}>
              <div className={style.card}>
                <img src={Group}/>  
                <div className={style.cardTitle}>
                  <h2>GROUP EDUCATION</h2>
                  <p>Lorem ipsum dolor sit amet, and lorem consectetuer adipiscing some.</p>
                </div>
                <div className={style.paragraphs}>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Mention about Bootcamp</p>
                  </div>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum dolor sit amet ipsum</p>
                  </div>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum dolor sit amet and</p>
                  </div>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum some lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.gradient2}>
              <div className={style.comingSoon}>
                <img src={ComingSoon}/>
                <h2>COMING SOON</h2>
              </div>
              <div className={style.card}>
                <img src={Individual}/>
                <div className={style.cardTitle}>
                  <h2>INDIVIDUAL EDUCATION</h2>
                  <p>Lorem ipsum dolor sit amet, and lorem consectetuer adipiscing some.</p>
                </div>
                <div className={style.paragraphs}>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum dolor</p>
                  </div>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum dolor sit amet ipsum</p>
                  </div>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum dolor sit amet and</p>
                  </div>
                  <div className={style.paragraph}>
                    <img src={Ticksquare}/>
                    <p>Lorem ipsum some lorem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={480}>
          <LearningTypeMob/>
        </MediaQuery>
      </div>
      <MediaQuery minWidth={481}>
      <img className={style.upGirl} src={UpGirl}/>
      </MediaQuery>
    </div>
  )
}

export default LearningType
