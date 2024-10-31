import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/bg.png'
function Navbar() {
    return (
        <header className='bg-white shadow flex justify-between items-center px-20 h-32 fixed w-full z-10'>
            <div className="w-[120px]">
                <img src={logo} alt="" />
            </div>

            <nav className="flex space-x-5 items-center">
                <NavLink className='text-lg hover:text-red-300 transition' to='/'>Home</NavLink>
                <NavLink className='text-lg hover:text-red-300 transition' to='/about'>About</NavLink>
                <NavLink className='text-lg hover:text-red-300 transition' to='/products'>Products</NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `text-lg px-4 py-2 rounded-full transition ${isActive ? 'bg-gray-100 text-black' : 'bg-red-300 text-white'
                        } hover:bg-gray-100 hover:text-black`
                    }
                >
                    Contact
                </NavLink>
            </nav>
        </header >
    )
}

export default Navbar