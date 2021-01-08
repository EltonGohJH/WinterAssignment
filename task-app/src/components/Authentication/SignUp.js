import React, { Component } from 'react'
import axios from 'axios'
import {Container, Form, Button, Card} from 'react-bootstrap'
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
       passwordConfirmation: ''
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
    console.log(this.state)
    axios.post('http://localhost:3001/api/v1/auth', this.state)
    .then(
      () => {
      this.props.history.push("/");
    
      }
    )  
    .catch(error => {console.log(error)})
  }
  
  render() {
    const {email, password, passwordConfirmation} = this.state
    return (
      <div style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', height: "100vh" }}>

        <Container className = "LoginContainer">
          <Card border="primary" className = "Border">
            <Form onSubmit ={this.submitHandler} >

            <Form.Group controlId = "email">
              <Form.Label>Email Address </Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" value = {email} onChange={this.emailChangeHandler} />
            </Form.Group>


            <Form.Group controlId = "password">
              <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value = {password} onChange={this.passwordChangeHandler} />
            </Form.Group>

            <Form.Group controlId = "passwordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password Confirmation" value = {passwordConfirmation} onChange={this.passwordConfirmationChangeHandler} />
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
