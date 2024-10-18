import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes"; // Import your routes configuration
import ProductPage from "./ProductPage"; // Import ProductPage component
import ShoppingCart from "./ShoppingCart"; // Import ShoppingCart component

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, count: quantity }];
    });
  };

  // Pass state and function as props where needed, e.g., to ProductPage and ShoppingCart
  const element = useRoutes(
    routes.map((route) => {
      if (route.path === "products") {
        return {
          ...route,
          element: <ProductPage handleAddToCart={handleAddToCart} />,
        };
      }
      if (route.path === "shoppingCart") {
        return {
          ...route,
          element: <ShoppingCart cartItems={cartItems} />,
        };
      }
      return route;
    })
  );

  return <>{element}</>;
};

export default App;
