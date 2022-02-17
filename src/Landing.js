import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'


function Landing() {
  return (
    <div>
      <img className='Landing__image' src='images/4.jpg' alt='MASTERPIECE'/>
    <div className='Landing__info'>
        <h4>o1ne MASTERPIECE</h4>
        If you use a phone, you already have what it takes to reach us.
    </div>
    <div className='Landing__button'>
        <Link to='/Home'><button className='Shop__nowButton'>Visit Our Shop</button></Link>
    </div>
    </div>
  )
}

export default Landing