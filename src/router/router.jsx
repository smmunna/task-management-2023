import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../shared/Login/Login"
import Register from "../shared/Register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes"
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import CreateTask from "../pages/CreateTask/CreateTask";
import ViewTask from "../pages/ViewTask/ViewTask";
import JoinTeam from "../pages/JoinTeam/Jointeam";
import TeamTask from "../pages/JoinTeam/TeamTask";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: JSON.parse(localStorage.getItem('user')) ? <Main /> : <Login />,
  },
  {
    path: "/login",
    element: <Login />,
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
        path: '',
        element: <PrivateRoutes><Home /></PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile /></PrivateRoutes>
      },
      {
        path: 'create-task',
        element: <PrivateRoutes><CreateTask /></PrivateRoutes>
      },
      {
        path: 'view-task',
        element: <PrivateRoutes><ViewTask /></PrivateRoutes>
      },
      {
        path: 'join-team',
        element: <PrivateRoutes><JoinTeam /></PrivateRoutes>
      },
      {
        path: 'team-task',
        element: <PrivateRoutes><TeamTask /></PrivateRoutes>
      },
      {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>
      }
    ]
  },

  {
    path: '*',
    element: <div>
      <h3 className="text-center text-3xl py-12 text-red-500 font-serif font-bold leading-[2]"> 404 Error ! <br />No routes found ...!</h3>
    </div>
  }

]);

export default router;
