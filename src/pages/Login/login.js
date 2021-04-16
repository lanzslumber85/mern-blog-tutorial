import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = async event => {
        await this.setState({
            [event.target.name]: event.target.value,
        });
    };

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={e => this.submitForm(e)}
                    >
                        Submit
                    </button>
                    <div className="forgot-password text-right">
                        Forgot password?
                    </div>
                    <div className="not-member text-right">
                        Not a member? <Link to="/register">Sign up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
