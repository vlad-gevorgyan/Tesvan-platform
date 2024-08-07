import React from 'react';
import style from './StudentsBtn.module.css'
import SittingGirl from '../../../images/HomePage/sittingGirl.svg'


const StudentsBtn = (props) => {
  return(
    <div className={style.studentsBtnContainer}>
      <div className={style.gradient}>
        <div className={style.studentsBtnContent}>
          <h1>Learn from <span>anywhere</span> in the world, <span>whenever</span> you want !</h1>
          <button className={style.studentsBtn}>Become a student</button>
        </div>
        <img className={style.sittingGirl} src={SittingGirl}/>
      </div>

    </div>
  )
}

export default StudentsBtn