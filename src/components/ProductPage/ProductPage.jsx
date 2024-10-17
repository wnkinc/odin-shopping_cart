import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <Navbar /> {/* Include Navbar at the top */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
