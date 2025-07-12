import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import request from "./api/request";

function App() {
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  useEffect(() => {
    const productsFetch = async () => {
      try {
        const res = await request.get("/products");
        if (!res.data || res.data.length === 0) {
          throw new Error("No Products found!");
        }
        setProducts(res.data);
      } catch (err) {
        alert(err.message || "Failed to fetch products!");
      } finally {
        setIsProductsLoading(false);
      }
    };

    productsFetch();
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        {isProductsLoading ? (
          <p>Fetching Products.... Loading....</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
