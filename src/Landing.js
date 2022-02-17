import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'


function Landing() {
  return (
    <div className='Landing__button'>
        <Link to='./Navbar'><button className='Shop__nowButton'>Visit Our Shop</button></Link>
    </div>
  )
}

export default Landing