import React from 'react';
import '../../App.css';
import BBox from '../BBox';
import MovingText from 'react-moving-text'

export default function Detach() {
    return (
        <div id='detach' className='products'>
            <div className='detach-title'>
                detach
            </div>
            <div className='detach-title2'>
                <MovingText
                    type="flash"
                    duration="10000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease-in-out"
                    iteration="infinite"
                    fillMode="none">
                    relax
                </MovingText>
            </div>
            <div class="break"></div>
            <div className='detach-bBox'>
                <BBox/>
            </div>
        </div>
    )
}