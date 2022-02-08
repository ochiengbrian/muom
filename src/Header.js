import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return <div className='Header'>
            <div className='Header__component'>
                <h1>o1ne MASTERPIECE</h1>
                <div className='Header__searchBar'>
                    <input className='Header__searchBar' placeholder='Search products here' type='text'/>
                    <button type='submit' value='search'>Search</button>
                    <h2>Account</h2>
                    <h2>Cart</h2>
                    <h2>Checkout</h2>
                </div>
            </div>
            {/*<div className='Header__log'>
                <img src='www.datta' alt='' alt='o1ne'/>
            </div>*/}
        </div>;
}

export default Header;
