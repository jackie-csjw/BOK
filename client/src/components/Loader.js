import React from 'react';
import '../App.css';
import './Loader.css'
import { CircleLoader } from 'react-spinners';

function Loader() {
  return (
    <div className='loader--page'>
      <CircleLoader color={'#cfccc8'} loading={true} size={150} />
    </div>
  )
}

export default Loader