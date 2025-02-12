import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './components/Products'

function App() {
  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])

  const getProducts = async ()=>{
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  const buyProduct = (idProduct)=>{
    setShop([...shop,idProduct])
  }

  if(products.length == 0){
    return <>
      <h1>Cargando...</h1>
    </>
  }

  return (
    <>
      <h1>Fake Store</h1>
      <Products product={products} buyProduct={buyProduct} />
    </>
  )
}

export default App
