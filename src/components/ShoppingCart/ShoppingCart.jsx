import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = ({
  cartItems,
  totalCartItems,
  incrementItemQuantity,
  decrementItemQuantity,
}) => {
  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.count, 0)
    .toFixed(2);

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
                <div className={styles.quantityContainer}>
                  <button
                    onClick={() => decrementItemQuantity(item.id)}
                    className={styles.decrementBtn}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => incrementItemQuantity(item.id)}
                    className={styles.incrementBtn}
                  >
                    +
                  </button>
                </div>
                <span>${(item.price * item.count).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className={styles.totalContainer}>
          <h2>Total: ${totalPrice}</h2>
        </div>
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
  incrementItemQuantity: PropTypes.func.isRequired,
  decrementItemQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
