import React from 'react';
import style from './HomePage.module.css'
import HomePageTitle from './HomePageTitel/HomePageTitle';
import PlatformFeature from './PlatformFeature/PlatformFeature';
import LearningType from './LearningType/LearningType';
import PopularCourses from './PopularCourses/PopularCourses';
import SliderComponent from './StudentsReview/SliderReview';
import OurExperts from './OurExperts/OurExperts';
import Becomestudents from './HowToBecomeAStudent/Becomestudents';
import StudentsBtn from './StudentsBtn/StudentsBtn';


const HomePage = (props) => {
  return(
    <div className={style.homepageContainer}>
      <HomePageTitle/>
      <PlatformFeature/>
      <LearningType/>
      <PopularCourses/>
      <SliderComponent/>
      <OurExperts/>
      <Becomestudents/>
      <StudentsBtn/>
    </div>
  )
}

export default HomePage