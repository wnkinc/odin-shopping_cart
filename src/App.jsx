import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

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

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  const routes = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "products",
      element: (
        <ProductPage
          handleAddToCart={handleAddToCart}
          totalCartItems={totalCartItems}
        />
      ),
    },
    {
      path: "shoppingCart",
      element: (
        <ShoppingCart cartItems={cartItems} totalCartItems={totalCartItems} />
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
