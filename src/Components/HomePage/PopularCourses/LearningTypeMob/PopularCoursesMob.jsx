import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './PopularCoursesMob.module.css';
import CoursesCardImg from '../../../../images/HomePage/coursesCardImg.svg'
import People from '../../../../images/HomePage/people.svg'
import Heart from '../../../../images/HomePage/heart.svg'
import Heart2 from '../../../../images/HomePage/heart2.svg'
import Coursetype from '../../../../images/HomePage/coursetype.svg'
import Calendar from '../../../../images/HomePage/calendar.svg'
import Level from '../../../../images/HomePage/level.svg'
import Clock from '../../../../images/HomePage/clock.svg'


const slideData = [
  {
    bought: '2235',
    courseType: 'Group',
    hours: '12 hours',
    level: 'Beginner',
    title: 'Automation testing',
    lessonType: 'Online',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    courseStartDate: 'Aug 28, 2023', 
    price: 75,
  },
  {
    bought: '2235',
    courseType: 'Group',
    duration: '12 months',
    level: 'Beginner',
    title: 'Manual testing',
    lessonType: 'Hybrid',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    courseStartDate: 'Aug 28, 2023', 
    price: 75,
    oldPrice: 180,
  },
  {
    bought: '2235',
    courseType: 'Group',
    duration: '12 months',
    level: 'Beginner',
    title: 'Automation testing',
    lessonType: 'Offline',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    courseStartDate: 'Aug 28, 2023', 
    price: 75,
    oldPrice: 180,
  },
];


// 
const maxLength = 55;
const truncatedDescriptions = slideData.map(item =>
  item.description.length > maxLength
    ? item.description.substring(0, maxLength) + "..."
    : item.description
);
  
// 

function convertDateFormat(inputDate) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const [month, day, year] = inputDate.split(" ");
  const monthIndex = months.findIndex(m => m === month);
  
  if (monthIndex === -1) {
    return "Invalid Date";
  }

  return `${day} ${months[monthIndex]} ${year}`;
}

const formattedDates = slideData.map(item =>
  convertDateFormat(item.courseStartDate)
);



const Slide = ({price, oldPrice, hours, truncatedText, lessonType, title, level, courseType, duration, bought, index}) => (
  <div className={style.gradient}>
  <div className={style.card}>
    <img className={style.coursesCardImg} src={CoursesCardImg}/>
    <div className={style.cardContent}>
      <div className={style.viewingAndLike}>
        <div className={style.viewing}>
          <img src={People}/>
          <p>{bought}</p>
        </div>
        <img className={style.heart} src={Heart}/>
      </div>
      <div className={style.durationAndType}>
        <div className={style.type}>
          <img className={style.coursetype} src={Coursetype}/>
          <p>{courseType}</p>
        </div>
        {duration && (
        <div className={style.duration}>
          <img className={style.calendar} src={Calendar}/>
          <p>{duration}</p>
        </div>
        )}
        {hours && (
        <div className={style.hours}>
          <img className={style.clock} src={Clock}/>
          <p>{hours}</p>
        </div>
        )}
        {level && (
        <div className={style.level}>
          <img className={style.Level} src={Level}/>
          <p>{level}</p>
        </div>
        )}
      </div>
      <div className={style.infarmation}>
        <div className={style.nameAndBtn}>
          <h2 className={style.cardName}>{title}</h2>
          <div className={style.onlineStatusBtn}>{lessonType}</div>
        </div>
        <p>{truncatedText}</p>
      </div>
      <div className={style.dateAndPrice}>
        <p className={style.date}>{formattedDates[index]}</p>
        <div className={style.price}>
          {oldPrice && (
          <p className={style.oldPrice}>{oldPrice}$</p>
          )}
          <div className={style.newPrice}>
            <h2>{price}$</h2>
            <p>monthly</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

const PopularCoursesMob = () => {
  const settings = {
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true,
    customPaging: (i) => (
      <div className={`${style['custom-dot']} ${i === activeIndex ? style.active : ''}`}></div>
    ),
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style['slider-container']}>
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <Slide
            key={index}
            index={index}
            price={slide.price}
            truncatedText={truncatedDescriptions[index]}
            lessonType={slide.lessonType}
            title={slide.title}
            level={slide.level}
            courseType={slide.courseType}
            duration={slide.duration}
            bought={slide.bought}
            oldPrice={slide.oldPrice}
            hours={slide.hours}
          />
        ))}
      </Slider>
    </div>
  );
};

export default PopularCoursesMob;