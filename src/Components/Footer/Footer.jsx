import React from 'react';
import style from './Footer.module.css';
import Frame from '../../images/Frame.png'
import Facebook from '../../images/Links/facebook.png'
import Linkedin from '../../images/Links/linkedin.png'
import Youtube from '../../images/Links/youtube.png'
import Arca from '../../images/Links/Arca.png'
import Visa from '../../images/Links/Visa.png'
import MasterCard from '../../images/Links/Mastercard.png'
import Idram from '../../images/Links/idram.png'
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterLinksMob from './FooterLinksMob/FooterLinksMob';

const Footer = () => {
  const FbLink = "https://www.facebook.com/tesvanllc/"
  const InLink = "https://www.linkedin.com/company/tesvan/"
  const YoutubeLink = "https://www.youtube.com/@tesvan202/"

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return(
    <footer>
      <div className={style.footerContainer}>
        <div className={style.contentContent}>
          <div className={style.content}>
            <div className={style.container}>
              <MediaQuery maxWidth={480}>
                <FooterLinksMob/>
              </MediaQuery>
            </div>
            <div className={style.container1}>
              <div className={style.logoAndName}>
                <Link to='/' onClick={scrollToTop}><img className={style.logo} src={Frame}/></Link>
                <p>Tesvan Platform</p>
              </div>
              <div className={style.socialNetwork}>
                <Link to={FbLink} target="_blank" rel="noopener noreferrer">
                  <div className={style.socialNetworkLink}>
                    <img src={Facebook}/>
                  </div>
                </Link>
                <Link to={InLink} target="_blank" rel="noopener noreferrer">
                <div className={style.socialNetworkLink}>
                  <img src={Linkedin}/>
                </div>
                </Link>
                <Link to={YoutubeLink} target="_blank" rel="noopener noreferrer">
                <div className={style.socialNetworkLink}>
                  <img src={Youtube}/>
                </div>
                </Link>
              </div>
              <div className={style.services}>
                <p>Need Quality Assurance services?</p>
                <span>Tesvan LLC</span>
              </div>
            </div>
            <div className={style.container2}> 
              <MediaQuery minWidth={481}>
                <FooterLinks/>
              </MediaQuery>
            </div>
          </div>
        </div>
        <div className={style.container3}>
          <div className={style.container3Content}>
            <p>© 2023 Tesvan Platform. All right reserved</p>
            <div className={style.payment}>
              <img src={Arca}/>
              <img src={Visa}/>
              <img src={MasterCard}/>
              <img src={Idram}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer; 