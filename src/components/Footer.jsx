import logo from '../assets/images/logo.png';
import { FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import video from '../assets/images/tk.gif'

function Footer() {
    return (
        <footer className='py-14 px-20  bg-red-200 w-[85%] mx-[15%] rounded-tl-[85px]' >
            <div className="flex w-full justify-between items-center">
                <div className='flex flex-col'>
                    <p className='max-w-[700px] text-5xl tracking-[10px]'>we are here <span className='text-yellow-400'>to bake</span> happy you!</p>
                    <div className='flex justify-between mt-10'>
                        <p>Follow us</p>
                        <img src={video}/>
                        <div className="social-media flex justify-between items-center gap-3">
                            <a className='bg-red-300 rounded-full p-3' href="#"><FaFacebook className='text-2xl text-white' /></a>
                            <a className='bg-red-300 rounded-full p-3' href="#"><FaPinterest className='text-2xl text-white' /></a>
                            <a className='bg-red-300 rounded-full p-3' href="#"><AiFillInstagram className='text-2xl text-white' /></a>
                            <a className='bg-red-300 rounded-full p-3' href="#"><FaYoutube className='text-2xl text-white' /></a>
                        </div>
                        <div className="flex flex-col gap-3 tracking-widest items-center gap-3">
                            <p className='font-bold'>Location</p>
                            <p>123 Main St, Anytown, USA</p>
                            <p className='font-bold'>Contact Phone</p>
                            <p>852 452 74 78</p>
                        </div>
                    </div>
                </div>
                <img src={logo} className='w-[300px] h-[260px]' />
            </div>




            <p className='text-center mt-4 text-white text-lg'> 2024 My Website. All rights reserved.</p>
        </footer>
    )
}

export default Footer