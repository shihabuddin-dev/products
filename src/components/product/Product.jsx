import { useState } from "react";

const Product = ({ product, handleGetProduct }) => {
    const { image, title, category, price, rating } = product
    const { rate, count } = rating
    const [addCart, setAddCart] = useState(true)
    const handleAddToCart = () => {
        setAddCart(false)
        handleGetProduct(product)
    }
    return (
        <div>
            <div className='p-4 border-2 border-gray-400 rounded-xl md:space-y-2'>
                <img className='w-full h-52 md:h-86' src={image} alt="this is product image" />
                <p><span className='font-semibold mt-2 md:mt-0'>Name:</span> {title}</p>
                <p className='font-semibold'><span>Price:</span> <span className='text-xl'>${price}</span></p>
                <p> <span className='font-semibold'>Rating:</span> {rate}/{count}</p>
                <p><span className='font-semibold'>Category:</span> {category}</p>
                <button
                    className='px-2 md:px-4 py-1 md:py-2 bg-gray-200 rounded-lg font-semibold mt-2 md:mt-0'
                    onClick={handleAddToCart}
                >{addCart ? 'Cart 🛒 ' : 'Added 🛒'}</button>
                
            </div>
        </div >

    );
};

export default Product;