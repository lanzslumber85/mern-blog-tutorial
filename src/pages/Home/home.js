import React, { useEffect } from "react";
import { Button } from "reactstrap";
import BlogComponent from "../../components/blog/blogComponent";
import { useHistory } from "react-router";
import Axios from "axios";

const Home = () => {
    useEffect(() => {
        Axios.get("http://localhost:4000/v1/blog/get-blogs")
            .then(result => {
                console.log("data API? ", result);
            })
            .catch(err => {
                console.log("error? ", err);
            });
    }, []);

    const history = useHistory();

    return (
        <div>
            <h3>Home Page</h3>
            <Button onClick={() => history.push("/create-blog")}>
                Create Blog
            </Button>
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <Button>Previous</Button>
            <Button>Next</Button>
        </div>
    );
};

export default Home;
