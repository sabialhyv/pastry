import React from "react";

import shop from "../assets/images/shop.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img6 from "../assets/images/6.jpeg";
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";
import { Link } from "react-router-dom";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div className="about-section p-20 min-h-96 w-[70%] m-auto">
      <div className="text-center">
        <h1 className="text-9xl mb-4">Maison Fraise</h1>
        <motion.p
           className={`uppercase text-lg ${inView ? 'animate-slideIn' : ''}`}
           ref={ref}
        >
          pâtisserie
        </motion.p>
      </div>
      <div className=" menu-text flex items-end gap-20 justify-between">
        <div className="flex flex-col gap-10">
          <motion.p
            className="uppercase text-lg"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              loop: Infinity,
            }}
          >
            WELCOME TO OUR PASTRY SHOP Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Error vitae eligendi enim dolorum, a, nihil,
            ducimus modi aperiam autem accusantium rem sit maiores libero
            doloremque qui illo!
          </motion.p>
          <Link className=" text-lg underline italic" to="/menu">
            See the menu
          </Link>
        </div>
        <motion.img
          className="w-[40%] h-[450px] -mt-[49px]"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            loop: Infinity,
          }}
          src={shop}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
