import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Assuming you want to keep styles modular

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
