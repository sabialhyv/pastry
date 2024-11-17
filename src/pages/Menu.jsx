import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MenuProduct from "../components/MenuProduct";
import apple from "../assets/images/tarts/tartapp.png";
import choco from "../assets/images/tarts/tartch.png";
import mango from "../assets/images/tarts/tartman.png";
import strab from "../assets/images/tarts/tartst.png";

function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="mb-32">
      <div className="menu-page p-14">
        <h2 className="mb-4 text-center font-bold text-6xl text-red-300">
          Our Menu
        </h2>
        <p className="text-center text-yellow-300 text-2xl italic">
          Explore our delightful selection of pastries and desserts.
        </p>
      </div>
      <MenuProduct />
      <motion.p
        className="menu-text text-8xl text-yellow-400 mt-14 p-5"
        ref={ref}
        initial={{ x: -80 }}
        animate={isInView ? { x: 0 } : { x: -80 }}
        transition={{ duration: 1 }}
      >
        Special edition
      </motion.p>
      <div className="w-full h-[400px] bg-center bg-fixed menu-text bg-cover menu ">
        <div className="card-container w-[80%] m-auto flex flex-wrap items-center justify-center ">
          <motion.div
            ref={ref}
            initial={{ x: -150 }}
            animate={isInView ? { x: 0 } : { x: -150 }}
            transition={{ duration: 1 }}
            className="bg-[#FEFAE0] shadow-lg hover:shadow-xl transition-shadow overflow-hidden card w-[48%] h-44 m-[0.5%] p-3 flex items-center justify-between"
          >
            <div className="w-[70%] flex flex-col gap-2 ">
              <p className="text-xl tracking-widest">MINI APPLE TART</p>
              <p className="font-bold text-lg">20 $</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                dolorum quod reiciendis voluptatibus distinctio unde eveniet
                ipsam assumenda.
              </p>
            </div>
            <img src={apple} className="object-cover w-[30%] h-44" alt="" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: -150 }}
            animate={isInView ? { x: 0 } : { x: -150 }}
            transition={{ duration: 1 }}
            className="bg-[#FEFAE0] shadow-lg hover:shadow-xl transition-shadow overflow-hidden card w-[48%] h-44 m-[0.5%] p-3 flex items-center justify-between"
          >
            <div className="w-[70%] flex flex-col gap-2 ">
              <p className="text-xl tracking-widest">MINI CHOCO TART</p>
              <p className="font-bold text-lg">20 $</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                dolorum quod reiciendis voluptatibus distinctio unde eveniet
                ipsam assumenda.
              </p>
            </div>
            <img src={choco} className="object-cover w-[30%] h-44" alt="" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: 150 }}
            animate={isInView ? { x: 0 } : { x: 150 }}
            transition={{ duration: 1 }}
            className="bg-[#FEFAE0] shadow-lg hover:shadow-xl transition-shadow overflow-hidden card w-[48%] h-44 m-[0.5%] p-3 flex items-center justify-between"
          >
            <div className="w-[70%] flex flex-col gap-2 ">
              <p className="text-xl tracking-widest">MINI MANGO TART</p>
              <p className="font-bold text-lg">20 $</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                dolorum quod reiciendis voluptatibus distinctio unde eveniet
                ipsam assumenda.
              </p>
            </div>
            <img src={mango} className="object-cover w-[30%] h-44 " alt="" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: 150 }}
            animate={isInView ? { x: 0 } : { x: 150 }}
            transition={{ duration: 1 }}
            className="bg-[#FEFAE0] shadow-lg hover:shadow-xl transition-shadow overflow-hidden card w-[48%] h-44 m-[0.5%] p-3 flex items-center justify-between"
          >
            <div className="w-[70%] flex flex-col gap-2 ">
              <p className="text-xl tracking-widest">MINI STRAWBERRY TART</p>
              <p className="font-bold text-lg">20 $</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                dolorum quod reiciendis voluptatibus distinctio unde eveniet
                ipsam assumenda.
              </p>
            </div>
            <img src={strab} className="object-cover w-[30%] h-44" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
