export const Products = ({ product }) => {
    return <>
        <h1>{product.title}</h1>
        <img src={product.image} height={200} width={300} alt="" />
        <h3>{product.price}</h3>
    </>
}