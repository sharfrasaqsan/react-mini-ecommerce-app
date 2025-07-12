import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ProductRating = ({ rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`}>
          <FaStar />
        </span>
      );
    }

    if (halfStar) {
      stars.push(
        <span key="half">
          <FaRegStarHalfStroke />
        </span>
      );
    }

    while (stars.length < 5) {
      stars.push(
        <span key={`empty-${stars.length}`}>
          <FaRegStar />
        </span>
      );
    }

    return stars;
  };

  return (
    <>
      <p className="stars">{renderStars(rating)}</p>
    </>
  );
};

export default ProductRating;
