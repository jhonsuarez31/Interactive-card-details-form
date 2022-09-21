
import React from 'react'
import "../css/Card.css";
import background from '../image/bg-main-desktop.png';
import bg_card_front from '../image/bg-card-front.png';
import bg_card_back from '../image/bg-card-back.png';
import card_logo from '../image/card-logo.svg'

export const Card = () => {
  return (
    <div className='image-conatiner'>
        <img className='image' src={background} />
        <div className='card_conatiner'>
        <div className='card_front'>  
        <img src={bg_card_front} />
        <img className='card_logo' src={card_logo} />
        <h2 className='card_number'>0000 0000 0000 0000</h2>   
        <div className='card_front_footer'>
        <h4>JANE APPLESEED</h4>
        <h4>00/00</h4>
        </div>
        </div> 
        </div>
        <img className='card_back' src={bg_card_back} />
    </div>
  )
}
