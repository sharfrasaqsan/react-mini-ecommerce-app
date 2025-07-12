import ProductCard from "../components/ProductCard";

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
