import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar