import React from "react";
import { useHistory } from "react-router";

const HeaderComponent = () => {
    const history = useHistory();
    return (
        <div>
            <header>
                <div onClick={() => history.push("/")}>
                    <h1>MERN Tutorial</h1>
                </div>

                <div onClick={() => history.push("/login")}>Logout</div>
            </header>
        </div>
    );
};

export default HeaderComponent;
