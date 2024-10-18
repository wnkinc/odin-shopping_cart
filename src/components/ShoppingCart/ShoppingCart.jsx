import PropTypes from "prop-types"; // Import PropTypes at the top
import Navbar from "../Navbar/Navbar";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ cartItems }) => {
  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <span>{item.title}</span>
              <span>Qty: {item.count}</span>
              <span>${(item.price * item.count).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={handleCheckout} className={styles.checkoutBtn}>
        Checkout
      </button>
    </div>
  );
};

// Define default props to ensure cartItems is at least an empty array
ShoppingCart.defaultProps = {
  cartItems: [],
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired, // Define PropTypes for cartItems
};

export default ShoppingCart;
