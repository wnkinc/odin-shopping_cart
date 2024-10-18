import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types"; // Import PropTypes

const Navbar = ({ totalCartItems }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <div>ShopLogo</div>
      </Link>
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
            {/* Display cart item count if it's greater than 0 */}
            {totalCartItems > 0 && (
              <span className={styles.cartCount}>{totalCartItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Define prop types for the component
Navbar.propTypes = {
  totalCartItems: PropTypes.number,
};

export default Navbar;
