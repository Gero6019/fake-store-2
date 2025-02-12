export const Products = ({ product, buyProduct }) => {
    return <div className="row">
        {product.map((element, index) => {
            return <div className="col-4" key={index}>
                <h1>{element.title}</h1>
                <img src={element.image} height={200} width={300} alt="" />
                <h3>${element.price}</h3>
                <button onClick={()=>{buyProduct(element.id)}}>Comprar</button>
            </div>
        })}
    </div>
}