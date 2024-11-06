import React from "react";
import pic1 from '../assets/images/1.jpeg'
import pic2 from '../assets/images/2.jpeg'
import pic3 from '../assets/images/3.jpeg'
import pic4 from '../assets/images/4.jpeg'
import pic6 from '../assets/images/6.jpeg'


function MenuProduct() {
  return (
    <div className="flex">
     
      <div className="flex gap-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
        <img className="w-96 h-96 object-cover object-center" src={pic2} alt="" />
      </div>
      <div className="flex gap-3">
        <img className="w-96 h-96 object-cover object-center" src={pic3} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
      </div>
      <div className="flex gap-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
        <img className="w-96 h-96 object-cover object-center" src={pic4} alt="" />
      </div>
      <div className="flex gap-3">
        <img className="w-96 h-96 object-cover object-center" src={pic6} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
      </div>
    </div>
  );
}

export default MenuProduct;
