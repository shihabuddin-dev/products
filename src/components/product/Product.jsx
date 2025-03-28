import React from 'react';

const Product = ({ product }) => {
    const { image } = product
    return (
        <div className='p-4 border-2 border-gray-400 rounded-xl'>
            <img className='w-full h-86' src={image} alt="this is product image" />

        </div>
    );
};

export default Product;