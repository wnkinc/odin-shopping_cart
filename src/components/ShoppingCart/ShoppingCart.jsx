import PropTypes from "prop-types"; // Import PropTypes at the top
import Navbar from "../Navbar/Navbar";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({ cartItems, totalCartItems }) => {
  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  console.log("ShoppingCart rendered with totalCartItems:", totalCartItems);

  return (
    <div className={styles.container}>
      <Navbar totalCartItems={totalCartItems} />
      <div className={styles.cartSection}>
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
    </div>
  );
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalCartItems: PropTypes.number,
};

export default ShoppingCart;
