import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText,
    FormFeedback,
} from "reactstrap";
import "../../assets/css/register.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            email: "",
            password: "",
            password2: "",
            validate: {
                emailState: "",
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = "has-success";
        } else {
            validate.emailState = "has-danger";
        }
        this.setState({ validate });
    }

    handleChange = async event => {
        const { target } = event;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    };

    submitForm(e) {
        e.preventDefault();
        console.log(`Full Name: ${this.state.fullName}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`Confirm Password: ${this.state.password2}`);
    }

    render() {
        const { email, password, password2, fullName } = this.state;
        return (
            <Container className="App">
                <h2>Register</h2>
                <Form className="form" onSubmit={e => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label for="fullName">Full Name</Label>
                            <Input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="********"
                                value={fullName}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={email}
                                valid={
                                    this.state.validate.emailState ===
                                    "has-success"
                                }
                                invalid={
                                    this.state.validate.emailState ===
                                    "has-danger"
                                }
                                onChange={e => {
                                    this.validateEmail(e);
                                    this.handleChange(e);
                                }}
                            />
                            <FormFeedback valid>
                                That's a tasty looking email you've got there.
                            </FormFeedback>
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your
                                email. Please input a correct email.
                            </FormFeedback>
                            <FormText>
                                Your username is most likely your email.
                            </FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword2">
                                Confirm Password
                            </Label>
                            <Input
                                type="password"
                                name="password2"
                                id="examplePassword2"
                                placeholder="********"
                                value={password2}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button>Register</Button>
                </Form>
                <Link to="/login">Back to login page</Link>
            </Container>
        );
    }
}

export default Register;
