
import { Suspense } from 'react'
import './App.css'
import Products from './components/products/Products'

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}
function App() {
  const productsPromise = fetchProducts()
  return (
    <>
      <Suspense fallback={<h2 className='text-center'>Loading Products.....</h2>}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
