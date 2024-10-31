import logo from '../assets/images/logo.png';
import { FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer className='py-14 px-20  bg-yellow-300 w-[85%] mx-[15%] rounded-tl-[85px] flex flex-col items-center' >
            <div className="footer-text flex w-full justify-between ">
                <div className="footer-logo">
                    <img src={logo} className='w-[240px]' />
                </div>
                <div className="social-media flex justify-between items-center gap-3">
                    <a href="#"><FaFacebook className='text-3xl text-red-300' /></a>
                    <a href="#"><FaPinterest className='text-3xl text-red-300' /></a>
                    <a href="#"><AiFillInstagram className='text-3xl text-red-300' /></a>
                    <a href="#"><FaYoutube className='text-3xl text-red-300' /></a>
                </div>
                <div className="footer-location">
                    <span>Location:</span>
                    <p>123 Main St, Anytown, USA</p>
                </div>
            </div>
            <p className='text-center mt-4 text-white text-lg'> 2024 My Website. All rights reserved.</p>
        </footer>
    )
}

export default Footer