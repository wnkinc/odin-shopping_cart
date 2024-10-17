import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
// import Profile from "./Profile";
// import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  //   {
  //     path: "profile/:name",
  //     element: <Profile />,
  //   },
];

export default routes;
