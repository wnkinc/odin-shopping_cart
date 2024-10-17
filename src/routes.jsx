import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
// import Profile from "./Profile";
// import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <ProductPage />,
  },
];

export default routes;
