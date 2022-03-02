import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Landing.css'


function Landing() {
  let navigate = useNavigate();
  return (
    <div>
      <img className='Landing__image' src='images/4.jpg' alt='MASTERPIECE'/>
    <div className='Landing__info'>
        <h4>o1ne MASTERPIECE</h4>
        If you use a phone, you already have what it takes to reach us.
    </div>
    <div className='Landing__button'>
        <button className='Shop__nowButton' onClick={()=>{navigate("/home")}}>Visit Our Shop</button>
    </div>
    </div>
  )
}

export default Landing