import Dashbroad from "../pages/Dashbroad";
import LayoutDefault from "../layout/LayoutDefault";
import Visitors from "../pages/Visitors";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import ChangePass from "../pages/ChangePass";
import DataUpdate from "../pages/DataUpdate";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashbroad />
      },
      {
        path: "/visitors",
        element: <Visitors />
      },
      {
        path: "/dataupdate",
        element: <DataUpdate />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/changepass",
        element: <ChangePass />
      }
    ]
  },
];