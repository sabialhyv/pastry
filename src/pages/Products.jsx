import React from 'react'
import Product from '../components/Product'
import choco from '../assets/images/chococake.webp'
import vanilla from '../assets/images/vanillacake.jpg'
import velvet from '../assets/images/redcake.jpg'


function Products() {
 
  return (
    <>
      <h1 className='text-center font-bold text-6xl text-red-300 my-2'>Our Products</h1>
      <div className="flex">
        {products && products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}

export default Products