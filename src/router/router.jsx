import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../shared/Login/Login"
import Register from "../shared/Register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes"

const router = createBrowserRouter([
    {
      path: "/",
      element: JSON.parse(localStorage.getItem('user')) ? <Main/>:<Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path:'/home',
      element:<PrivateRoutes><Main/></PrivateRoutes>,
      children:[

      ]
    },
   
  ]);

  export default router;
