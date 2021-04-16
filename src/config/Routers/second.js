import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./../../pages/Home/home";
import CreateBlog from "./../../pages/CreateBlog/createBlog";
import DetailBlog from "../../pages/DetailBlog/detailBlog";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";

const SecondRoutes = () => {
    return (
        <div>
            <HeaderComponent />
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
            <FooterComponent />
        </div>
    );
};

export default SecondRoutes;
