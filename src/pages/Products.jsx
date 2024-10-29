import React from 'react'

function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="container">
        <div className="product">
          <img src="https://example.com/product1.jpg" alt="" />
          <h2>Product 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="product">
          <img src="https://example.com/product2.jpg" alt="" />
          <h2>Product 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="product">
          <img src="https://example.com/product3.jpg" alt="" />
          <h2>Product 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Products