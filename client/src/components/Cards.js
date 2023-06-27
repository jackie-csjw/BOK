import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>
            <span style={{color: '#cfccc8'}}>get&nbsp;</span>
            <span style={{color: '#cfccc8'}}>it&nbsp;</span>
            <span style={{color: '#cfccc8'}}>out</span>
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="something something som..."
                    label="family"
                    path="/serivces"/>
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="something something som..."
                    label="family"
                    path="/serivces"/>
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="something something som..."
                    label="family"
                    path="/serivces"/>
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="something something som..."
                    label="friends"
                    path="/serivces"/>
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="something something som..."
                    label="life"
                    path="/serivces"/>
                    <CardItem 
                    src="images/img-1.jpg" 
                    text="something something som..."
                    label="relationship"
                    path="/serivces"/>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Cards;