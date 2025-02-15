import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { BuyList } from './components/BuyList'

function App() {
  const [products, setProducts] = useState([])
  const [shop, setShop] = useState([])
  const [shopPage, setShopPage] = useState(false)

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const buyProduct = (product) => {
    setShop([...shop, product])
  }

  if (products.length == 0) {
    return <>
      <h1>Cargando...</h1>
    </>
  }

  if (shopPage == false) {
    return (
      <>
        <h1>Fake Store</h1>
        <button disabled={shop.length == 0} onClick={() => { setShopPage(true) }}>Carrito: {shop.length}</button>
        <Products product={products} buyProduct={buyProduct} />
      </>
    )
  } else {
    return <>
      <BuyList shop={shop} setShopPage={setShopPage} setShop={setShop} />
    </>
  }
}

export default App
