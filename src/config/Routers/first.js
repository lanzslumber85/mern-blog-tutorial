import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";
import SecondRoutes from "./second";

const FirstRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <SecondRoutes />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default FirstRoutes;
