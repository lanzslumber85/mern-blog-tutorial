import React from "react";
import { Link } from "react-router-dom";

const DetailBlog = () => {
    return (
        <div>
            <div>
                <img src="http://placeimg.com/640/480/tech" alt="dummy" />
            </div>
            <div>
                <h3>Blog Title</h3>
            </div>
            <div>
                <p>
                    <small>Author</small>
                    <span> - </span>
                    <small>Date Post</small>
                </p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse convallis metus dui. Praesent sit amet quam
                    efficitur, finibus velit tincidunt, finibus felis. Nulla eu
                    velit dolor. Curabitur sollicitudin magna et interdum
                    fermentum. Praesent et ullamcorper dui, ut bibendum lacus.
                    In vitae erat ac elit rhoncus condimentum sed et neque.
                    Nulla.
                </p>
            </div>

            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default DetailBlog;
