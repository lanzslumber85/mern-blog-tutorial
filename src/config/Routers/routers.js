import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/home";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";

const Routers = () => {
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
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default Routers;
