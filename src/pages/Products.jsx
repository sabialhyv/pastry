import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

function Products() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        setCakes(data);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);
  return (
    <section className="products-section p-20 bg-white">
      <h1 className="text-center font-bold text-6xl text-red-300 my-10">Our Products</h1>
      <div className="flex flex-wrap justify-center">
        {cakes.map(cake => (
          <Product key={cake.id} cake={cake} />
        ))}
      </div>
    </section>
  );
}

export default Products;
