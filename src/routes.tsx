
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