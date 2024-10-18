import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./HomePage.module.css";
import PropTypes from "prop-types";

const HomePage = ({ totalCartItems }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((response) => response.json())
      .then((data) => setFeaturedProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar totalCartItems={totalCartItems} />
      <header className={styles.heroSection}>
        <h1>Welcome to Our Store!</h1>
        <p>Find the best products at unbeatable prices.</p>
        <Link to="/products">
          <button className={styles.shopNowBtn}>Shop Now</button>
        </Link>
      </header>
      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div className={styles.productList}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 ShopName. All rights reserved.</p>
      </footer>
    </div>
  );
};

HomePage.propTypes = {
  totalCartItems: PropTypes.number.isRequired,
};

export default HomePage;
