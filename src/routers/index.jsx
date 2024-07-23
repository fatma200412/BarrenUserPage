import NoPage from "../pages/noPage";
import Home from "../pages/users/home";
import Pricing from "../pages/users/pricing";
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
        path: "/",
        element: <Pricing />,
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
];
