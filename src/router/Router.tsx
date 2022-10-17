import React, { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useStore";
import { privateRoutes, publicRoutes } from "./routes";

const Router = () => {

    const { auth } = useTypedSelector(state => state.auth);

    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path} />)}
            {auth && privateRoutes.map(route =>
                <Route
                    key={route.path}
                    element={route.element}
                    path={route.path} />)}
        </Routes>
    );
};

export default Router;