import React, { Component } from 'react'
import axios from 'axios'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import loginImage from "../../Images/moonview.jpg";
import {Link} from "react-router-dom";





class SignUp extends Component {
  constructor(props) {
    super(props)
      this.state = {
        email: '',
        password: '',
        passwordConfirmation: '',
        gotError: false,
        error: ""
      }
    }

  emailChangeHandler = event => {
    this.setState({ email: event.target.value }) 
  }

  passwordChangeHandler = event => {
    this.setState({ password: event.target.value }) 
  }

  
  passwordConfirmationChangeHandler = event => {
    this.setState({ passwordConfirmation: event.target.value }) 
  }

  submitHandler = event => {
    event.preventDefault()
    axios.post('https://task-api-2021.herokuapp.com/api/v1/auth', {email: this.state.email, password: this.state.password, passwordConfirmation: this.state.passwordConfirmation})
    .then(
      () => {
      this.props.history.push("/");
      }
    )  
    .catch(err => {
      this.getError(err.response.data.errors.full_messages);
      this.setState({gotError: true});
    })
  }

  getError= (e) => {
    this.setState({error: e});
    console.log(this.state.error)
  }
  
  render() {
    return (
      <div style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', height: "100vh" }}>
        {/* check if there is error then map the array to show the lines of errors */}
        {this.state.gotError && 
          <Container>
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              {this.state.error.map((i,key) => {
                return <div key={key}>{i}</div>;
              })}
            </Alert>
          </Container>
        }

        <Container className = "LoginContainer">
          <Card border="primary" className = "Border">
            <Form onSubmit ={this.submitHandler} >

              <Form.Group controlId = "email">
                <Form.Label>Email Address </Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" value = {this.state.email} onChange={this.emailChangeHandler} />
              </Form.Group>

              <Form.Group controlId = "password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value = {this.state.password} onChange={this.passwordChangeHandler} />
              </Form.Group>

              <Form.Group controlId = "passwordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password Confirmation" value = {this.state.passwordConfirmation} onChange={this.passwordConfirmationChangeHandler} />
                <Form.Text className="text-muted">
                  Please do not use password that you use for your other accounts.
                </Form.Text>
              </Form.Group>

              <Link to="/">Sign in instead</Link>
              <Button variant="primary" type ="submit" className="SignUpButton">Sign up</Button>
            </Form>
          </Card>
        </Container>
      </div>
    )
  }
}

export default SignUp
