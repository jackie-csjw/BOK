import React from 'react';
import '../App.css';
import './HeroSection.css';
import cloudBg from './images/main-cloud.png'
// import { Button } from './Button';

function HeroSection() {
  // const quotes = [
  //   "it'll   okay",
  //   "one day at a time.\none hour at a time.\none minute at a time.",
  //   "breathe in,\nbreathe out",
  //   "this will pass."
  // ]

  return (
    <div id='home' className='hero-container'>
        <video src='/videos/SkyBG.mp4' autoPlay loop muted />
        <img src={cloudBg} className="main-cloud float-text" />
        <div className='quote float-text'>
          it'll be okay
        </div>
        {/* <p class='float-text'>☁︎ welcome ☁︎</p> */}
        <div className='hero-btns'>
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                box breathing
            </Button> */}
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                get it out
            </Button> */}
        </div>
    </div>
  )
}

export default HeroSection;
