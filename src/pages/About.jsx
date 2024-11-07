import React from 'react'

import shop from '../assets/images/shop.png'
import img1 from '../assets/images/1.jpeg'
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'
import img6 from '../assets/images/6.jpeg'
import img7 from '../assets/images/7.webp'
import img8 from '../assets/images/8.webp'
import img9 from '../assets/images/9.webp'

function About() {
  return (
    <div className="about-section p-20 min-h-96">
      <div>
      <h2 className="text-4xl mb-4">Maison Fraise</h2>
      <p>patisserie</p>
      </div>
      <p>WELCOME TO OUR PASTRY SHOP</p>
      <img src={shop} alt="" />
    </div>
  )
}

export default About 