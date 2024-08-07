import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './LearningTypeMob.module.css';
import Group from '../../../../images/HomePage/group.svg'; 
import Individual from '../../../../images/HomePage/individual.svg';
import ComingSoon from '../../../../images/HomePage/comingSoon.svg';
import Ticksquare from "../../../../images/HomePage/ticksquare.svg";

const slideData = [
  {
    title: 'GROUP EDUCATION',
    description: 'Lorem ipsum dolor sit amet, and lorem consectetuer adipiscing some.',
    paragraphs: [
      'Mention about Bootcamp',
      'Lorem ipsum dolor sit amet ipsum',
      'Lorem ipsum dolor sit amet and',
      'Lorem ipsum some lorem',
    ],
    image: Group,
    gradientClass: styles.gradient1,
  },
  {
    titleComingSoon: 'COMING SOON',
    imageComingSoon: ComingSoon,
    comingSoonClass: styles.comingSoon,
    title: 'INDIVIDUAL EDUCATION',
    description: 'Lorem ipsum dolor sit amet, and lorem consectetuer adipiscing some.',
    paragraphs: [
      'Lorem ipsum dolor',
      'Lorem ipsum dolor sit amet ipsum',
      'Lorem ipsum dolor sit amet and',
      'Lorem ipsum some lorem',
    ],
    image: Individual,
    gradientClass: styles.gradient2,
  },
];

const Slide = ({ title, description, paragraphs, image, titleComingSoon, imageComingSoon, comingSoonClass, gradientClass }) => (
  <div className={`${styles.slide} ${gradientClass}`}>
    {titleComingSoon && (
      <div className={comingSoonClass}>
        <img src={imageComingSoon} alt={titleComingSoon} />
        <h2>{titleComingSoon}</h2>
      </div>
    )}
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.cardTitle}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {paragraphs && (
        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph, index) => (
            <div className={styles.paragraph} key={index}>
              <img className={styles.ticksquare} src={Ticksquare}/>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const LearningTypeMob = () => {
  const settings = {
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true,
    customPaging: (i) => (
      <div className={`${styles['custom-dot']} ${i === activeIndex ? styles.active : ''}`} />
    ),
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0

  return (
    <div className={styles['slider-container']}>
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <Slide
            title={slide.title}
            description={slide.description}
            paragraphs={slide.paragraphs}
            image={slide.image}
            key={index}
            isActive={index === activeIndex}
            titleComingSoon={slide.titleComingSoon}
            imageComingSoon={slide.imageComingSoon}
            comingSoonClass={slide.comingSoonClass}
            gradientClass={slide.gradientClass}
          />
        ))}
      </Slider>
    </div>
  );
};

export default LearningTypeMob;
