import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../shared/Login/Login"
import Register from "../shared/Register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes"
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import CreateTask from "../pages/CreateTask/CreateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: JSON.parse(localStorage.getItem('user')) ? <Main /> : <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: '/home',
    element: <PrivateRoutes><Main /></PrivateRoutes>,
    children: [
      {
        path:'',
        element:<PrivateRoutes><Home/></PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile /></PrivateRoutes>
      },
      {
        path: 'create-task',
        element: <PrivateRoutes><CreateTask /></PrivateRoutes>
      }
    ]
  },

]);

export default router;
