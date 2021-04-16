import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./../../pages/Home/home";
import CreateBlog from "./../../pages/CreateBlog/createBlog";
import DetailBlog from "../../pages/DetailBlog/detailBlog";

const SecondRoutes = () => {
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <HashRouter>
                <Switch>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </HashRouter>
            <footer>
                <h6>Footer</h6>
            </footer>
        </div>
    );
};

export default SecondRoutes;
