import logo from "../assets/images/logo.png";
import { FaFacebook, FaYoutube, FaPinterest, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-[85%] h-[400px] px-20 py-14 flex flex-col gap-7 justify-between bg-[#798645]  mx-[15%] rounded-tl-[85px]">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <p className="max-w-[700px] text-5xl tracking-[10px]">
            we are here <span className="text-yellow-400">to bake</span> happy
            you!
          </p>
          <div className="flex justify-between  mt-10">
            <div className="flex flex-col items-center gap-3">
              <p className="text-2xl px-16 py-4 bg-[#F2EED7] rounded-3xl">
                Follow us
              </p>
              <div className="social-media flex justify-between items-center gap-3">
                <a className="bg-[#FEFAE0] rounded-full p-3" href="#">
                  <FaFacebook className="text-2xl text-yellow-500" />
                </a>
                <a className="bg-[#FEFAE0] rounded-full p-3" href="#">
                  <FaPinterest className="text-2xl text-yellow-500" />
                </a>
                <a className="bg-[#FEFAE0] rounded-full p-3" href="#">
                  <AiFillInstagram className="text-2xl text-yellow-500" />
                </a>
                <a className="bg-[#FEFAE0] rounded-full p-3" href="#">
                  <FaYoutube className="text-2xl text-yellow-500" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 tracking-widest">
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-xl" />
                <p className="font-bold">Location</p>
              </div>
              <p>123 Main St, Anytown, USA</p>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl" />
                <p className="font-bold">Contact Phone</p>
              </div>
              <p>852 452 74 78</p>
            </div>
          </div>
        </div>
        {/* <div className="top-5 w-[300px] h-[260px] bg-[#FEFAE0] rounded-3xl">
          <a href="/">
            <img src={logo} className="w-full h-full" />
          </a>
        </div> */}
      </div>

      <p className="text-center mt-4 text-black text-lg">
        2024 My Website. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
