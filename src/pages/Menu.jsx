import React from "react";
import MenuProduct from "../components/MenuProduct";

function Menu() {
  return (
    <>
      <div className="menu-page p-20">
        <h2 className="text-4xl mb-4">Our Menu</h2>
        <p>Explore our delightful selection of pastries and desserts.</p>
      </div>

      <MenuProduct />
    </>
  );
}

export default Menu;
