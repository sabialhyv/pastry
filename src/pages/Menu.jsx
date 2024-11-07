import React from "react";
import MenuProduct from "../components/MenuProduct";

function Menu() {
  return (
    <div className="mb-32">
      <div className="menu-page p-14">
        <h2 className="mb-4 text-center font-bold text-6xl text-red-300">Our Menu</h2>
        <p className="text-center text-yellow-300 text-2xl italic">Explore our delightful selection of pastries and desserts.</p>
      </div>
      <MenuProduct />
    </div>
  );
}

export default Menu;
