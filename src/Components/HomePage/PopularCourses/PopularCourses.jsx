import React from 'react';
import style from './PopularCourses.module.css'
import CoursesCardImg from '../../../images/HomePage/coursesCardImg.svg'
import People from '../../../images/HomePage/people.svg'
import Heart from '../../../images/HomePage/heart.svg'
import Coursetype from '../../../images/HomePage/coursetype.svg'
import Calendar from '../../../images/HomePage/calendar.svg'
import LevelImg from '../../../images/HomePage/level.svg'
import MediaQuery from "react-responsive";
import PopularCoursesMob from './LearningTypeMob/PopularCoursesMob';

const PopularCourses = (props) => {
  return(
    <div className={style.popularCoursesContainer}>
      <h1>Explore mo<span>re popular cou</span>rses</h1>
      <div className={style.popularCoursesContent}>
        <MediaQuery minWidth={481}>
          <div className={style.cards}>
          <div className={style.gradient}>
            <div className={style.card}>
              <img className={style.coursesCardImg} src={CoursesCardImg}/>
              <div className={style.cardContent}>
                <div className={style.viewingAndLike}>
                  <div className={style.viewing}>
                    <img src={People}/>
                    <p>2235</p>
                  </div>
                  <img className={style.heart} src={Heart}/>
                </div>
                <div className={style.durationAndType}>
                  <div className={style.type}>
                    <img className={style.coursetype} src={Coursetype}/>
                    <p>Group</p>
                  </div>
                  <div className={style.duration}>
                    <img className={style.calendar} src={Calendar}/>
                    <p>4 months</p>
                  </div>
                </div>
                <div className={style.infarmation}>
                  <div className={style.nameAndBtn}>
                    <h2 className={style.cardName}>Manual testing</h2>
                    <div className={style.onlineStatusBtn}>Offline</div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, the consectetuer adipiscing ...</p>
                </div>
                <div className={style.dateAndPrice}>
                  <p className={style.date}>25 Jun 2023</p>
                  <div className={style.price}>
                    <p className={style.oldPrice}>180 $</p>
                    <div className={style.newPrice}>
                      <h2>97$</h2>
                      <p>monthly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.gradient}>
            <div className={style.card}>
              <img className={style.coursesCardImg} src={CoursesCardImg}/>
              <div className={style.cardContent}>
                <div className={style.viewingAndLike}>
                  <div className={style.viewing}>
                    <img src={People}/>
                    <p>2235</p>
                  </div>
                  <img className={style.heart} src={Heart}/>
                </div>
                <div className={style.durationAndType}>
                  <div className={style.type}>
                    <img className={style.coursetype} src={Coursetype}/>
                    <p>Group</p>
                  </div>
                  <div className={style.duration}>
                    <img className={style.calendar} src={Calendar}/>
                    <p>4 months</p>
                  </div>
                </div>
                <div className={style.infarmation}>
                  <div className={style.nameAndBtn}>
                    <h2 className={style.cardName}>Manual testing</h2>
                    <div className={style.onlineStatusBtn}>Offline</div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, the consectetuer adipiscing ...</p>
                </div>
                <div className={style.dateAndPrice}>
                  <p className={style.date}>25 Jun 2023</p>
                  <div className={style.price}>
                    <p className={style.oldPrice}>180 $</p>
                    <div className={style.newPrice}>
                      <h2>97$</h2>
                      <p>monthly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.gradient}>
            <div className={style.card}>
              <img className={style.coursesCardImg} src={CoursesCardImg}/>
              <div className={style.cardContent}>
                <div className={style.viewingAndLike}>
                  <div className={style.viewing}>
                    <img src={People}/>
                    <p>2235</p>
                  </div>
                  <img className={style.heart} src={Heart}/>
                </div>
                <div className={style.durationAndType}>
                  <div className={style.type}>
                    <img className={style.coursetype} src={Coursetype}/>
                    <p>Group</p>
                  </div>
                  <div className={style.duration}>
                    <img className={style.calendar} src={Calendar}/>
                    <p>4 months</p>
                  </div>
                </div>
                <div className={style.infarmation}>
                  <div className={style.nameAndBtn}>
                    <h2 className={style.cardName}>Manual testing</h2>
                    <div className={style.onlineStatusBtn}>Offline</div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, the consectetuer adipiscing ...</p>
                </div>
                <div className={style.dateAndPrice}>
                  <p className={style.date}>25 Jun 2023</p>
                  <div className={style.price}>
                    <p className={style.oldPrice}>180 $</p>
                    <div className={style.newPrice}>
                      <h2>97$</h2>
                      <p>monthly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.gradient}>
            <div className={style.card}>
              <img className={style.coursesCardImg} src={CoursesCardImg}/>
              <div className={style.cardContent}>
                <div className={style.viewingAndLike}>
                  <div className={style.viewing}>
                    <img src={People}/>
                    <p>2235</p>
                  </div>
                  <img className={style.heart} src={Heart}/>
                </div>
                <div className={style.durationAndType}>
                  <div className={style.type}>
                    <img className={style.coursetype} src={Coursetype}/>
                    <p>Group</p>
                  </div>
                  <div className={style.duration}>
                    <img className={style.calendar} src={Calendar}/>
                    <p>4 months</p>
                  </div>
                </div>
                <div className={style.infarmation}>
                  <div className={style.nameAndBtn}>
                    <h2 className={style.cardName}>Manual testing</h2>
                    <div className={style.onlineStatusBtn}>Offline</div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, the consectetuer adipiscing ...</p>
                </div>
                <div className={style.dateAndPrice}>
                  <p className={style.date}>25 Jun 2023</p>
                  <div className={style.price}>
                    <p className={style.oldPrice}>180 $</p>
                    <div className={style.newPrice}>
                      <h2>97$</h2>
                      <p>monthly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={480}>
          <PopularCoursesMob/>
        </MediaQuery>
      </div>
      <a>View all courses</a>
    </div>
  )
}

export default PopularCourses