import React, { Component } from 'react'
import axios from 'axios'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import loginImage from "../../Images/moonview.jpg";
import {Link} from "react-router-dom";




class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
          email: '',
          password: '',
          gotError: false,
          error: ""
      }
  }
  //form change handler
  emailChangeHandler = event => {
    this.setState({ email: event.target.value }) 
  }

  passwordChangeHandler = event => {
    this.setState({ password: event.target.value }) 
  }

  submitHandler = event => {
    event.preventDefault()
    axios.post('https://task-api-2021.herokuapp.com/api/v1/auth/sign_in', {email: this.state.email, password: this.state.password})
    .then(
      response => {
      localStorage.setItem('access-token', response.headers["access-token"]);
      localStorage.setItem('client', response.headers["client"]);
      localStorage.setItem('expiry', response.headers["expiry"]);
      localStorage.setItem('uid', response.headers["uid"]);
      localStorage.setItem('token-type', response.headers["token-type"]);
      this.props.history.push("/home");
    
      }
    )  
    .catch(error => {
      this.getError(error.response.data.errors);
      this.setState({gotError: true});
    })
  }
  getError= (err) => {
    this.setState({error: err})
  }

  
  
  render() {
    return (
      <div style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', height: "100vh" }}>

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
                <Form.Text className="text-muted">
                  Please do not use password that you use for your other accounts.
                </Form.Text>
              </Form.Group>

              <Link to="/Signup">Create account</Link>

              <Button variant="primary" type ="submit" className="LoginButton">Login</Button>
            </Form>
          </Card>
        </Container>
      </div>
    )
  }
}

export default Login
