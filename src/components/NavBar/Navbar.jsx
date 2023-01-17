import React from 'react'
import {FaCoins} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import "./NavBar.css";

const Navbar = (props) => {
  return (
    <Link to = '/'>
        <nav>
            <FaCoins className='icons' />
            <h1>Coin <span className='purple'>Search</span></h1>
        </nav>
    </Link>
  )
}

export default Navbar