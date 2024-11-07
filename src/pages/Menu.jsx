import React from "react";
import MenuProduct from "../components/MenuProduct";

function Menu() {
  return (
    <>
      <div className="menu-page p-14">
        <h2 className="text-4xl mb-4 text-center">Our Menu</h2>
        <p className="text-center">Explore our delightful selection of pastries and desserts.</p>
      </div>
      <MenuProduct />
    </>
  );
}

export default Menu;
