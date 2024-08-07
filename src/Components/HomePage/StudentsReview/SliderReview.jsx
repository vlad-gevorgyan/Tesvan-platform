import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderReview.module.css';
import Commentgirl from '../../../images/HomePage/commentgirl.svg'
import Quote from '../../../images/HomePage/quote.svg'
import Star from '../../../images/HomePage/star.png'
import MediaQuery from "react-responsive";

const cardsData = [
  { id: 1, comment: 'Card 1', description: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.', avatar: './publicimg/avatar.png', name: 'Name', surname: 'Surename', profession: 'QA Engineer at Company'  },
  { id: 2, comment: 'Card 2', description: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.', avatar: './publicimg/avatar.png', name: 'Name', surname: 'Surename', profession: 'QA Engineer at Company' },
  { id: 3, comment: 'Card 3', description: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.', avatar: './publicimg/avatar.png', name: 'Name', surname: 'Surename', profession: 'QA Engineer at Company'  },
  { id: 4, comment: 'Card 4', description: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.', avatar: './publicimg/avatar.png', name: 'Name', surname: 'Surename', profession: 'QA Engineer at Company'  }, 
  { id: 5, comment: 'Card 5', description: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.', avatar: './publicimg/avatar.png', name: 'Name', surname: 'Surename', profession: 'QA Engineer at Company'  },
];

const SliderCard = ({ comment, description, isActive, avatar, name, surname, profession }) => (
  <div className={`${styles['slider-card']} ${isActive ? styles.active : ''}`}>
    <div className={styles.cardContent}>
      <img className={styles.quote} src={Quote}/>
      <div className={styles.comment}>
        {description}
      </div>
      <div className={styles.stars}>
        <img src={Star}/>
        <img src={Star}/>
        <img src={Star}/>
        <img src={Star}/>
        <img src={Star}/>
      </div>
    </div>
    <div className={styles.cardstyle}></div>
    <div className={styles.commentator}>
      <img className={styles.avatar} src={avatar}/>
      <div className={styles.commentatorInfo}>
        <div className={styles.nameAndSurname}>
          <p>{name} {surname}</p>
        </div>
        <div className={styles.profession}>{profession}</div>
      </div> 
    </div>
  </div>
);

const SliderComponent = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: slidesToShow,
    speed: 500,
    beforeChange: (current, next) => {
      const slideCount = cardsData.length;
      const activeIndex = (next  + slideCount) % slideCount;
      setActiveIndex(activeIndex);
    },
    arrows: false,
    dots: true,
    customPaging: (i) => (
      <div className={`${styles['custom-dot']} ${i === activeIndex ? styles.active : ''}`} />
    ),
  };

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles['slider-container']}>
      <h1 className={styles.slidertitle}>Wh<span>at do the stu</span>dents say</h1>
      <Slider {...settings} initialSlide={1} afterChange={() => {}}>
        {cardsData.map((card, index) => (
          <SliderCard
            name={card.name}
            surname={card.surname} 
            profession={card.profession}
            avatar={card.avatar}
            key={card.id}
            comment={card.comment}
            description={card.description}
            isActive={index === activeIndex}
          />
        ))}
      </Slider>
      <MediaQuery minWidth={481}>
      <img className={styles.commentgirl} src={Commentgirl}/>
      </MediaQuery>
    </div>
  );
};

export default SliderComponent;
