import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import BlogComponent from "../../components/blog/blogComponent";
import { useHistory } from "react-router";
import Axios from "axios";

const Home = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/v1/blog/get-blogs?page=2")
            .then(result => {
                console.log("data API? ", result);
                const responseAPI = result.data;
                setBlogItems(responseAPI.data);
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
            {blogItems.map(item => {
                return (
                    <BlogComponent
                        key={item._id}
                        image={`http://localhost:4000/${item.image}`}
                        title={item.title}
                        content={item.content}
                        authorName={item.author.name}
                        datePost={item.createdAt}
                    />
                );
            })}

            <Button>Previous</Button>
            <Button>Next</Button>
        </div>
    );
};

export default Home;
