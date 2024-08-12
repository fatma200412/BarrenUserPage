import ForgetPassword from "../pages/forgetPassword";
import NoPage from "../pages/noPage";
import ExploreEvents from "../pages/users/exploreEvents";
import Home from "../pages/users/home";
import Login from "../pages/users/login";
import Pricing from "../pages/users/pricing";
import Register from "../pages/users/register";
import UserRoot from "../pages/users/userRoot";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exploreEvents",
        element: <ExploreEvents />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgetpass",
    element: <ForgetPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
