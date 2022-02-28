import React from 'react'
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> b53d6c10af6ea2dd223674119d2b940e81eaafff
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
<<<<<<< HEAD
        <button className='Shop__nowButton' onClick={()=>{navigate("/home")}}>Visit Our Shop</button>
    </div>
=======
        <Link to='./Navbar'><button className='Shop__nowButton'>Visit Our Shop</button></Link>
>>>>>>> b53d6c10af6ea2dd223674119d2b940e81eaafff
    </div>
  )
}

export default Landing