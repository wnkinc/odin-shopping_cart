import Navbar from "../Navbar/Navbar";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar /> {/* Include Navbar here */}
      <header className={styles.heroSection}>
        <h1>Welcome to Our Store!</h1>
        <p>Find the best products at unbeatable prices.</p>
        <button className={styles.shopNowBtn}>Shop Now</button>
      </header>
      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div className={styles.productList}>
          <div className={styles.productCard}>Product 1</div>
          <div className={styles.productCard}>Product 2</div>
          <div className={styles.productCard}>Product 3</div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 ShopName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
