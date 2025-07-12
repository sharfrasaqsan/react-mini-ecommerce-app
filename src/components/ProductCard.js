import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
          <div className="name-price-row">
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
          </div>
        </Link>
        <ProductRating rating={product.rating} />
        <button>Add to Cart</button>
      </>
    </div>
  );
};

export default ProductCard;
