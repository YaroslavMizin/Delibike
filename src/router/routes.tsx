import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Report from "../pages/Report";
import SignUp from "../pages/SignUp";

export const publicRoutes: RouteObject[] = [
    {element: <Home/>, path: '/'},
    {element: <LogIn/>, path: '/login'},
    {element: <SignUp/>, path: '/signup'},
    {element: <Report/>, path: '/contact'},
]

