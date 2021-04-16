import React from "react";
import { Button } from "reactstrap";
import BlogComponent from "../../components/blog/blogComponent";
import { useHistory } from "react-router";

const Home = () => {
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
