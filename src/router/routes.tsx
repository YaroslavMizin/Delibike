import { Navigate, RouteObject } from "react-router-dom";
import Case from "../pages/Case";
import Cases from "../pages/Cases";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Officers from "../pages/Officers";
import Profile from "../pages/Profile";
import Report from "../pages/Report";
import SignUp from "../pages/SignUp";

export const publicRoutes: RouteObject[] = [
    {element: <Home/>, path: '/'},
    {element: <LogIn/>, path: '/login'},
    {element: <SignUp/>, path: '/signup'},
    {element: <Report/>, path: '/contact'},
    {element: <Navigate to='/'/>, path: '*'}
];

export const privateRoutes: RouteObject[] = [
    {element: <Cases/>, path: '/cases'},
    {element: <Case/>, path: 'cases/:id'},
    {element: <Profile/>, path: '/profile'},
    {element: <Officers/>, path: '/officers'},
]