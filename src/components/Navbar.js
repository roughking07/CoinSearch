import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { BiSearchAlt } from "react-icons/bi";
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Coin <span className='purple'>Search</span></h1>
                <BiSearchAlt className='icon' />
            </div>
        </Link>
    )
}

export default Navbar
