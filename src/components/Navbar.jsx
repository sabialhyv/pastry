import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/bg.png'
function Navbar() {
    return (
        <header className='bg-white shadow flex justify-between items-center px-20 py-4 fixed w-full'>
            <div className="w-[120px]">
                <img src={logo} alt="" />
            </div>
            
            <nav className="flex space-x-5 items-center">
                <Link className='text-lg hover:text-red-300 transition' to='/'>Home</Link>
                <Link className='text-lg hover:text-red-300 transition' to='/about'>About</Link>
                <Link className='text-lg hover:text-red-300 transition' to='/products'>Products</Link>
                <Link className='text-lg  px-4 py-2 bg-red-300 text-white rounded-full hover:text-black hover:bg-gray-100 transition' to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar