import ProductList from "../components/ProductList";

const Home = ({ products }) => {
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Home;
