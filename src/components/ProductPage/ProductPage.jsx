import PropTypes from "prop-types"; // Import PropTypes at the top
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductPage.module.css";

const ProductPage = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 0;
    handleAddToCart(product, quantity);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <div className={styles.quantityControls}>
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <input
                type="number"
                value={quantities[product.id] || 0}
                readOnly
              />
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  handleAddToCart: PropTypes.func.isRequired, // Define PropTypes for handleAddToCart
};

export default ProductPage;
