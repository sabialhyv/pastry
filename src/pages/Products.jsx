import React from 'react'
import Product from '../components/Product'
import choco from '../assets/images/chococake.webp'
import vanilla from '../assets/images/vanillacake.jpg'
import velvet from '../assets/images/redcake.jpg'


function Products() {
  let products = [
    {
      id: 1,
      name: 'Chocolate Cake',
      price: 15,
      url: choco,
      description: 'Delicious chocolate cake with a rich and nutty flavor',
    },
    {
      id: 2,
      name: 'Vanilla Cake',
      price: 12,
      url: vanilla,
      description: 'A delicious vanilla cake with a light and velvety flavor',
    },
    {
      id: 3,
      name: 'Red Velvet Cake',
      price: 18,
      url: velvet,
      description: 'A delicious red velvet cake with a rich and velvety flavor',
    }
  ]

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