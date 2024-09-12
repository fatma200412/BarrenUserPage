import ForgetPassword from "../pages/forgetPassword";
import NoPage from "../pages/noPage";
import ExploreEvents from "../pages/users/exploreEvents";
import Home from "../pages/users/home";
import Login from "../pages/users/login";
import Register from "../pages/users/register";
import UserRoot from "../pages/users/userRoot";
import FAQ from "../pages/users/help/index";
import ContactUs from "../pages/users/contactUs";
import Details from "../pages/users/details";
import BookNow from "../pages/users/bookNow";
import ConfirmedAndPay from "../pages/users/confirmedPay";

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
        path: "/cards",
        element: <Home />,
      },
      {
        path: "/cards/:id",
        element: <Details />,
      },
      {
        path: "/cards/:id/bookNow",
        element: <BookNow />,
      },
      {
        path: "/cards/:id/bookNow/confirmed",
        element: <ConfirmedAndPay />,
      },
      {
        path: "/exploreEvents",
        element: <ExploreEvents />,
      },
      {
        path: "/help",
        element: <FAQ />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
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
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
