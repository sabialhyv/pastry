import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/images/bg.png";
function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-white shadow flex justify-between items-center px-20 h-32 fixed w-full z-10">
      <div className="w-[120px]">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="flex space-x-5 items-center">
        {isHomePage ? (
          <>
            <ScrollLink
              className="text-gray-600 text-lg hover:text-red-300 transition cursor-pointer"
              activeClass="text-lg text-red-300"
              to="home"
              smooth={true}
              duration={500}
              spy={true}
            >
              Home
            </ScrollLink>
            <ScrollLink
              className="text-gray-600 text-lg hover:text-red-300 transition cursor-pointer"
              activeClass="text-lg text-red-300"
              to="about"
              smooth={true}
              duration={500}
              spy={true}
            >
              About
            </ScrollLink>
            <ScrollLink
              className="text-gray-600 text-lg hover:text-red-300 transition cursor-pointer"
              activeClass="text-lg text-red-300"
              to="products"
              smooth={true}
              duration={500}
              spy={true}
            >
              Products
            </ScrollLink>
            <ScrollLink
              className="text-gray-600 text-lg hover:text-red-300 transition cursor-pointer"
              activeClass="text-lg text-red-300"
              to="contact"
              spy={true}
            >
              Contact
            </ScrollLink>
            <NavLink
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-gray-100 text-black"
                    : "bg-red-300 text-white transition cursor-pointer"
                } hover:bg-gray-100 hover:text-black transition cursor-pointer`
              }
              to="/menu"
            >
              Menu
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className="text-lg hover:text-red-300 transition cursor-pointer"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="text-lg hover:text-red-300 transition cursor-pointer"
              to="/menu"
            >
              Menu
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
