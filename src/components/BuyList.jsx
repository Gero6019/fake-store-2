import { useEffect, useState } from "react"

export const BuyList = ({ shop, setShopPage, setShop })=>{
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(shop.reduce((suma,product)=> suma+product.price,0))
    },[shop])

    return <>
        <h1>Fake Store</h1>
        <button onClick={()=>{ setShopPage(false) }}>Volver</button>

        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {shop.map((element,index)=>{
                    return <tr key={index}>
                        <td>{element.title}</td>
                        <td>{element.price}</td>
                    </tr>
                })}
            </tbody>
        </table>

        <h2>Total: {total}</h2>
        <button onClick={()=>{
            setShopPage(false)
            setShop([])
            alert("Gracias por su compra") 
        }}>Realizar Compra</button>
    </>
}