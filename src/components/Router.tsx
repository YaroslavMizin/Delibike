import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../router/routes";

const Router = () => {
    return (
        <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}>
                    </Route>)}
        </Routes>
    );
};

export default Router;