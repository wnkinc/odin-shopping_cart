import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  // Sample data for the cart (can be replaced with actual cart data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", count: 2, price: 29.99 },
    { id: 2, name: "Product 2", count: 1, price: 49.99 },
    { id: 3, name: "Product 3", count: 3, price: 19.99 },
  ]);

  const handleCheckout = () => {
    alert("Proceeding to checkout");
    // Logic for checkout can be added here
  };

  return (
    <div className={styles.container}>
      <Navbar /> {/* Include the Navbar */}
      <div className={styles.cartSection}>
        <h1>Your Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>Qty: {item.count}</span>
                <span>${(item.price * item.count).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button className={styles.checkoutBtn} onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
