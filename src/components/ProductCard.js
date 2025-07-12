import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "250px", height: "250px" }}
          />
          <h3>{product.name}</h3>
        </Link>

        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
      </>
    </div>
  );
};

export default ProductCard;
