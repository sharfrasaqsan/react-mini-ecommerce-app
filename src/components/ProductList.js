import ProductCard from "../components/ProductCard";
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((i) => (
        <ProductCard key={i.id} product={i} />
      ))}
    </div>
  );
};

export default ProductList;
