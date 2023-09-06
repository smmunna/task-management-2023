import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../shared/Login/Login"
import Register from "../shared/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path:'/home',
      element:<Main/>,
      children:[

      ]
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);

  export default router;
