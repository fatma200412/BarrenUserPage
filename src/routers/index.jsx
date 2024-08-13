import ForgetPassword from "../pages/forgetPassword";
import NoPage from "../pages/noPage";
import ExploreEvents from "../pages/users/exploreEvents";
import Home from "../pages/users/home";
import Login from "../pages/users/login";
import Register from "../pages/users/register";
import UserRoot from "../pages/users/userRoot";
import FAQ from "../pages/users/help/index";
import ContactUs from "../pages/users/contactUs"

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
        path: "/help",
        element: <FAQ />,
      },{
        path: "/contactUs",
        element: <ContactUs />,
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
