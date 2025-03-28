import React, { use } from 'react';
import Product from '../product/Product';

const Products = ({ productsPromise }) => {
    const products = use(productsPromise)
    return (
        <div>
            <h1 className='text-3xl text-center'>Total Products: {products.length}</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;