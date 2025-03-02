import React from 'react'

import arrow from '../assets/images/diagonalarrow.svg';

const Card = ({val,key}) => {
  return (
    <div className='mx-5' key={key}>
        <div className='cardHeading'>{val.heading}</div>
        <div className='cardSubHeading my-3'>{val.subHeading}</div>

        <img src={val.imageUrl} alt='' style={{display:'block',width:'100%'}}/>

        <div className='globalGreenText my-3'>Learn More <img src = {arrow} alt=''/></div>
    </div>
  )
}

export default Card