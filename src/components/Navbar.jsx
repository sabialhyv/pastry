import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/bg.png'
function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            
            <div className="navbar">
                <Link className='link-styles' to='/'>Home</Link>
                <Link className='link-styles' to='/about'>About</Link>
                <Link className='link-styles' to='/products'>Products</Link>
                <Link className='link-styles contact-link' to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar