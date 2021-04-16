import React from "react";
import { useHistory } from "react-router";
import { Button } from "reactstrap";

const BlogComponent = () => {
    const history = useHistory();
    return (
        <div>
            <div>
                <img src="http://placeimg.com/240/180/tech" alt="dummy"></img>
            </div>
            <div>
                <h5>Title Blog</h5>
            </div>
            <div>
                <p>
                    <small>Author</small>
                    <span> - </span>
                    <small>Date post</small>
                </p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan velit dui, ut lobortis sapien maximus eu.
                    Proin lobortis placerat mi, sed interdum tortor mattis a.
                    Aliquam cursus ultricies enim. Suspendisse commodo orci
                    vitae nibh semper, ut dapibus orci pharetra. Nam condimentum
                    velit elit, non efficitur arcu efficitur eu. Sed.
                </p>
            </div>
            <div>
                <Button onClick={() => history.push("/detail-blog")}>
                    View Detail
                </Button>
            </div>
        </div>
    );
};

export default BlogComponent;
