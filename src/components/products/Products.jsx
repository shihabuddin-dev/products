import React, { use, useState } from 'react';

import Product from '../product/Product';

const Products = ({ productsPromise }) => {
    const products = use(productsPromise)
    // console.log(products)

    const [getProduct, setGetProduct] = useState([])

    const handleGetProduct = (product) => {
        const newProduct = [...getProduct, product]
        setGetProduct(newProduct)
    }
    return (
        <div>
            <h1 className='text-3xl text-center pb-4 font-semibold'>Total Products: {products.length}</h1>
            <h2 className='text-xl font-semibold pb-4'>Added To Cart: {getProduct.length}</h2>
            <div className='grid md:grid-cols-3 gap-4 pb-4'>
                {
                    getProduct.map(getPro => <div key={getPro.id} className='flex gap-2 items-center'>
                        <img className='w-12' src={getPro.image} alt="this is product images" />
                        <p>{getPro.title} <br /> ${getPro.price}</p>

                    </div>)
                }
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            handleGetProduct={handleGetProduct}
                            product={product}>
                        </Product>)
                }
            </div>
        </div>
    );
};

export default Products;