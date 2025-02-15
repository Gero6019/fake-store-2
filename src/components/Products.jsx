export const Products = ({ product, buyProduct }) => {
    return <div className="row">
        {product.map((element, index) => {
            return <div className="col-4" key={index}>
                <h4>{element.title}</h4>
                <img src={element.image} height={200} width={300} alt="" />
                <h3>${element.price}</h3>
                <button onClick={()=>{buyProduct(element)}}>Comprar</button>
            </div>
        })}
    </div>
}