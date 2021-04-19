import React from "react";
import { useHistory } from "react-router";
import { Button } from "reactstrap";

const BlogComponent = props => {
    const history = useHistory();
    return (
        <div>
            <div>
                <img src={props.image} alt="blogpost" />
            </div>
            <div>
                <h5>{props.title}</h5>
            </div>
            <div>
                <p>
                    <small>{props.authorName}</small>
                    <span> - </span>
                    <small>{props.datePost}</small>
                </p>
            </div>
            <div>
                <p>{props.content}</p>
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
