<<<<<<< HEAD

import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/home";
import Error from "../pages/error";
import Error from "../pages/error";
import Error from "../pages/error";
export const router=createBrowserRouter([{
    path:"/home",
    element:<Home/>,
    errorElement:<Error/>,
},{ path:"/post",
    element:<CreatePost/>,
    errorElement:<Error/>,},{ path:"/profile",
    element:<Profile/>,
    errorElement:<Error/>,},{ path:"/myphotos",
    element:<MyPhotos/>,
    errorElement:<Error/>,},{ path:"/login",
    element:<Login/>,
    errorElement:<Error/>,},{ path:"/signup",
    element:<Signup/>,
    errorElement:<Error/>,},])
=======
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Login from "./pages/login";
import MyPhotos from "./pages/MyPhotos";
import Profile from "./pages/Profile";
import CreatePost from "../pages/post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/post",
    element: <CreatePost />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/myphotos",
    element: <MyPhotos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
>>>>>>> update
