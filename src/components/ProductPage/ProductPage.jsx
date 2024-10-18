import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({}); // Track quantities of products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
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
      [id]: Math.max((prev[id] || 0) - 1, 0), // Prevent negative quantities
    }));
  };

  const handleInputChange = (id, value) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setQuantities((prev) => ({
        ...prev,
        [id]: parsedValue,
      }));
    }
  };

  const handleAddToCart = (id) => {
    const quantity = quantities[id] || 0;
    alert(`Added ${quantity} of item ${id} to cart!`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <div className={styles.cardHeader}>
              <h2>{product.title}</h2>
            </div>
            <div className={styles.cardBody}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
            <div className={styles.cardFooter}>
              <p>{product.description.substring(0, 100)}...</p>
              <p className={styles.price}>${product.price}</p>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => handleDecrement(product.id)}
                  className={styles.decrementBtn}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[product.id] || 0}
                  onChange={(e) =>
                    handleInputChange(product.id, e.target.value)
                  }
                  className={styles.quantityInput}
                />
                <button
                  onClick={() => handleIncrement(product.id)}
                  className={styles.incrementBtn}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(product.id)}
                className={styles.addToCartBtn}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
