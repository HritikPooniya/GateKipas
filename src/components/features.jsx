import React from 'react'

import '../assets/styles/features.css'
import Card from './Card.jsx'

import Cards from '../utils/card.js';

const Features = () => {

  console.log()
  return (
    <div className='features mt-5'>
        <div className='globalGreenText text-center'>Features</div>

        <article className='questionFeature text-center'>Why Gatekipas?</article>

        <article className='m-auto w-75 contentMain text-center'>Gatekipas is designed to simplify and enhance the way businesses manage their operations. From visitor management  to employee scheduling and security, we ensure your business runs smoothly.</article>
        

        <div className='d-flex flex-wrap  mt-5 justify-content-evenly'>

          {
            Cards.map((val,index)=>{
              return (
                <div className='mb-5'>

                  <Card val={val} key={index}/>
                </div>

              )
            })
          }
         
        </div>
    </div>
  )
}

export default Features