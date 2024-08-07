import React from 'react';
import style from './Becomestudents.module.css'
import Register from '../../../images/HomePage/register.svg'
import Login from '../../../images/HomePage/login.svg'
import Courses from '../../../images/HomePage/courses.svg'
import Payment from '../../../images/HomePage/payment.svg'
import Learn from '../../../images/HomePage/learn.svg'
import Certification from '../../../images/HomePage/certification.svg'



const Becomestudents = (props) => {
  return(
    <div className={style.becomestudentsContainer}>
      <div className={style.becomestudentsContent}> 
      <h1>How to beco<span>me a stud</span>ent</h1>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img src={Register}/>
              <div className={style.stage}>Stage 1</div>
              <p>Register on the site</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img src={Login}/>
              <div  className={style.stage}>Stage 2</div>
              <p>Log in your account</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img src={Courses}/>
              <div className={style.stage}>Stage 3</div>
              <p>Choose your course</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img src={Payment}/>
              <div className={style.stage}>Stage 4</div>
              <p>Pay for the course</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img src={Learn}/>
              <div className={style.stage}>Stage 5</div>
              <p>Learn and enjoy</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardContent}>
              <img src={Certification}/>
              <div className={style.stage}>Stage 6</div>
              <p>Certificate and Interview</p>
            </div>
          </div>
        </div>
        <div className={style.info}>
          <p>Have you already gone through all the steps and are you looking for a job ?</p></div>
        <button className={style.joinOurTeamBtn}>Join our team</button>
      </div>
    </div>
  )
}

export default Becomestudents