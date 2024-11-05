import React from 'react'

function Product({ cake }) {
    return (
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 bg-[#f6f4f4] rounded-md shadow-lg hover:shadow-xl transition-shadow p-5 relative overflow-hidden">
            <img
                src={`../src/assets/images/${cake.url}`}
                alt={cake.name}
                className="rounded-md h-60 w-full object-cover transition-transform duration-200 hover:scale-105"
            />
            <div className="mt-4">
                <h2 className="text-yellow-500 text-2xl font-bold mb-1">{cake.name}</h2>
                <p className="text-gray-600 text-lg mb-3">{cake.description}</p>
                <p className="text-red-500 text-xl font-semibold">${cake.price}</p>
                <button className="mt-4 w-full py-2 bg-red-300 text-white rounded-md hover:bg-red-400 transition">Details</button>
            </div>
        </div>
    )
}

export default Product