import React from "react";
import bread1 from "../assets/images/bread1.png";
import bread2 from "../assets/images/bread2.png";

function Contact() {
  return (
    <div className="m-auto w-[50%] mb-24 relative">
      <img src={bread1} className="w-44 absolute top-10 left-0" alt="" />
      <div className="contact-section p-20 text-center">
        <h1 className="text-7xl mb-4">Contact Us</h1>
        <p className="menu-text italic  text-2xl ">
          We would love to hear from you!
        </p>
      </div>
      <form action="" className="flex flex-col m-auto gap-3">
        <label htmlFor="" className="text-2xl menu-text ">
          Name
        </label>
        <input
          type="text"
          className="h-8 bg-transparent outline-none border-b-2 mt-2 border-yellow-500"
        />
        <label htmlFor="" className="text-2xl menu-text ">
          Surname
        </label>
        <input
          type="text"
          className="h-8 bg-transparent outline-none border-b-2 mt-2 border-yellow-500"
        />
        <label htmlFor="" className="text-2xl menu-text ">
          Email
        </label>
        <input
          type="email"
          className="h-8 bg-transparent outline-none border-b-2 mt-2 border-yellow-500"
        />
        <label htmlFor="" className="text-2xl menu-text ">
          Phone Number
        </label>
        <input
          type="text"
          className="h-8 bg-transparent outline-none  border-b-2 mt-2 border-yellow-500"
        />
      </form>
      <img src={bread2} className="w-44 absolute top-[80%] left-[100%]" alt="" />
    </div>
  );
}

export default Contact;
