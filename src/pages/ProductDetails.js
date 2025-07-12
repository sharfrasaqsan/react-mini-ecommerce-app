import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();

  const product = products.find((i) => i.id === id);

  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "500px", height: "500px" }}
      />
      <h2>{product.name}</h2>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>
        {product.available ? `In stock :${product.instock}` : "Out of stock"}
      </p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
