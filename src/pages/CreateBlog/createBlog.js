import React from "react";
import { useHistory } from "react-router";
import { Button } from "reactstrap";

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div>
            <div>
                <h3>Create New Blog Post</h3>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor="postTitle">Post Title</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            onChange={null}
                        />
                    </div>

                    <div>
                        <img
                            src="http://placeimg.com/100/100/arch"
                            alt="preview"
                        />
                    </div>
                    <div>
                        <input type="file" />
                    </div>

                    <div>
                        <textarea></textarea>
                    </div>
                </form>
            </div>

            <div>
                <Button onClick={() => history.push("/")}>Back</Button>
                <Button>Save</Button>
            </div>
        </div>
    );
};

export default CreateBlog;
