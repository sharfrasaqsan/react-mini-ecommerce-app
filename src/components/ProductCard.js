import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  // Helper function to convert rating to stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>★</span>);
    }

    if (halfStar) {
      stars.push(<span key="half">☆</span>);
    }

    while (stars.length < 5) {
      stars.push(<span key={`empty-${stars.length}`}>☆</span>);
    }

    return stars;
  };

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
        <p className="stars">{renderStars(product.rating)}</p>
        <button>Add to Cart</button>
      </>
    </div>
  );
};

export default ProductCard;
