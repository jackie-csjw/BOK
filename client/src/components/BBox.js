import React, { useEffect, useState, useCallback } from 'react'
import ProgressBar from '@ramonak/react-progress-bar';
import './BBox.css';

var timer = null;
var intervalID = null;
const instructions = ['inhale', 'hold', 'exhale'];
var instruc = instructions[0];

function BBox() {
  instruc = instructions[0];
  const [temp, setTemp] = useState(1);
  const [counter, setCounter] = useState(0);
  const [isplayin, setIsPlaying] = useState(false);

  const pause = () => {
    setTemp(counter);
    setIsPlaying(false);
    clearInterval(timer);
    clearInterval(intervalID);
  };

  const reset = () => {
    instruc = instructions[0];
    setIsPlaying(false);
    setCounter(0);
    setTemp(1);
    clearInterval(timer);
    clearInterval(intervalID);
  };

  const play = () => {
    setIsPlaying(true);
    setCounter(temp);
    timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    
  };

  //----------------------------------------------------------------

  var barsprogress = [0, 0, 0];

  if(counter > 4 && counter < 4*2+1){
    barsprogress[0] = counter - 4;
    instruc = instructions[1];
  }
  else if(counter >= 4*2+1){
    barsprogress[0] = 4;
  }
  else{
    barsprogress[0] = 0
  }
  //
  if(counter > (3-1)*4 && counter < (3-1)*4*2+1){
    barsprogress[1] = counter - (3-1)*4;
    instruc = instructions[2]
  }
  else if(counter >= (3-1)*4*2+1){
    barsprogress[1] = 4;
  }
  else{
    barsprogress[1] = 0
  }
  //
  if(counter > (4-1)*4 && counter < (4-1)*4*2+1){
    barsprogress[2] = counter - (4-1)*4;
    instruc = instructions[1]
  }
  else if(counter >= (4-1)*4*2+1){
    barsprogress[2] = 4;
  }
  else{
    barsprogress[2] = 0
  }

  if(counter == 17){
    instruc = instructions[0];
    setCounter(1);
  }
  return (
    <>
      <div className='bar-wrapper' onDoubleClick={() => reset()} onClick={() => isplayin? pause() : play()}>
          <ProgressBar 
            height='18px' 
            bgColor='#b0dae6' 
            baseBgColor='transparent' 
            completed={counter} 
            maxCompleted={4}
            transitionTimingFunction = 'linear'
            customLabel=' ' 
            className='p-bar'/>
          <ProgressBar 
            height='18px' 
            dir='rtl' 
            bgColor='#b0dae6' 
            baseBgColor='transparent' 
            completed={barsprogress[0]} 
            maxCompleted={4}
            transitionTimingFunction = 'linear'
            customLabel=' ' 
            className='p-bar2'/>
          <ProgressBar 
            height='18px' 
            dir='rtl' 
            bgColor='#b0dae6' 
            baseBgColor='transparent' 
            completed={barsprogress[1]} 
            maxCompleted={4}
            transitionTimingFunction = 'linear'
            customLabel=' ' 
            className='p-bar3'/>
          <ProgressBar 
            height='18px' 
            dir='rtl' 
            bgColor='#b0dae6' 
            baseBgColor='transparent' 
            completed={barsprogress[2]} 
            maxCompleted={4}
            transitionTimingFunction = 'linear'
            customLabel=' ' 
            className='p-bar4'/>
          
          {isplayin ? (
            <>
              {instruc}
            </>
          ) : (
            <>
              {counter > 0 ? (
                <>
                  {instruc}
                </>
              ) : (
                <>
                press me
                </>
              )}
            </>
          )}
      </div>
    </>
    
  )
}

export default BBox