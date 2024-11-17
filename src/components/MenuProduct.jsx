import React from "react";
import pic1 from '../assets/images/1.jpeg'
import pic2 from '../assets/images/2.jpeg'
import pic3 from '../assets/images/3.jpeg'
import pic4 from '../assets/images/4.jpeg'
import pic6 from '../assets/images/6.jpeg' 


function MenuProduct() {
  return (
    <div className="flex gap-5 flex-wrap justify-around items-center">
      <div className="w-[45%] flex gap-3">
        <img className="rounded-lg shadow-2xl w-1/2 h-96 object-cover object-center" src={pic2} alt="" />
        <p className="-ms-5 mt-5 -z-10 w-1/2 border-2 h-44 ps-6 p-3 border-yellow-500 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
      </div>
      <div className="w-[45%] flex gap-3">
        <img className="rounded-lg shadow-2xl w-1/2 h-96 object-cover object-center" src={pic3} alt="" />
        <p className="-ms-5 mt-5 -z-10 w-1/2 border-2 h-44 ps-6 p-3 border-yellow-500 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
      </div>
      <div className="w-[45%] flex gap-3">
        <p className="-me-5 mt-5 -z-10 w-1/2 border-2 h-44 pe-6 p-3 border-yellow-500 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
        <img className="rounded-lg shadow-2xl w-1/2 h-96 object-cover object-center" src={pic4} alt="" />
      </div>
      <div className="w-[45%] flex gap-3">
        <p className="-me-5 mt-5 -z-10 w-1/2 border-2 h-44 pe-6 p-3 border-yellow-500 rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quas perferendis ratione unde laborum suscipit quisquam et illo eligendi doloremque! Aperiam et doloremque accusantium architecto qui sapiente aspernatur quaerat reprehenderit.</p>
        <img className="rounded-lg shadow-2xl w-1/2 h-96 object-cover object-center" src={pic6} alt="" />
      </div>
    </div >
  );
}

export default MenuProduct;
