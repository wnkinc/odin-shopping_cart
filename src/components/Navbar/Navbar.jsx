import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types"; // Import PropTypes

const Navbar = ({ cartItemCount }) => {
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
            {cartItemCount > 0 && (
              <span className={styles.cartCount}>{cartItemCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Define prop types for the component
Navbar.propTypes = {
  cartItemCount: PropTypes.number.isRequired, // Expect cartItemCount to be a number and required
};

export default Navbar;
