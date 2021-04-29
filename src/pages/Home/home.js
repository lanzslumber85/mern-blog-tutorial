import React, { useEffect } from "react";
import { Button } from "reactstrap";
import BlogComponent from "../../components/blog/blogComponent";
import { useHistory } from "react-router";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = () => {
  const { blogItems } = useSelector(state => {
    console.log("state.blogItemsReducer:", state.blogItemsReducer);
    return state.blogItemsReducer;
  });

  const dispatch = useDispatch();
  console.log("dispatch:", dispatch);

  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/get-blogs?page=2")
      .then(response => {
        console.log("response:", response);

        const responseAPI = response.data;
        console.log("responseAPI:", responseAPI);

        console.log("responseAPI.data:", responseAPI.data);
        dispatch({ type: "BLOG_ITEMS", blogItems: responseAPI.data });
      })
      .catch(err => {
        console.log("error message? ", err);
      });
  }, [dispatch]);

  const history = useHistory();

  return (
    <div>
      <h3>Home Page</h3>

      <Button onClick={() => history.push("/create-blog")}>Create Blog</Button>

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
