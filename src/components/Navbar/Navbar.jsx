import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css"; // Assuming you want to keep styles modular
import { useState } from "react"; // For demonstration purposes

const Navbar = () => {
  // For demo purposes, this could be replaced with actual cart state logic
  const [cartItemCount, setCartItemCount] = useState(34); // Replace with actual cart logic

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ShopLogo</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.cartLink}>
          <Link to="/shoppingCart">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className={styles.cartCount}>{cartItemCount}</span> // Badge for item count
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
