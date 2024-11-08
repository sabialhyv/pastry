import React from "react";

import shop from "../assets/images/shop.png";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img6 from "../assets/images/6.jpeg";
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";

function About() {
  return (
    <div className="about-section p-20 min-h-96">
      <div className="text-center">
        <h2 className="text-4xl mb-4 ">Maison Fraise</h2>
        <p>patisserie</p>
      </div>
      <div className="flex items-end">
        <p className="uppercase ">
          WELCOME TO OUR PASTRY SHOP Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Error vitae eligendi enim dolorum, a, nihil, ducimus
          modi aperiam autem accusantium rem sit maiores libero doloremque qui
          illo. Quibusdam, quaerat eum!
        </p>
        <img src={shop} alt="" />
      </div>
    </div>
  );
}

export default About;
