import React from 'react'

function Product({ name, url, description }) {
    return (
        <div className="product">
            <img src={url} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Product