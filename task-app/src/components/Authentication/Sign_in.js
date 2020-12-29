import React, { Component } from 'react'
import axios from 'axios'
import {Container, Form, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sign_in.css';
class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  emailChangeHandler = event => {
    this.setState({ email: event.target.value }) 
  }

  passwordChangeHandler = event => {
    this.setState({ password: event.target.value }) 
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3001/api/v1/auth/sign_in', this.state)
    .then(
      response => {
      localStorage.setItem('access-token', response.headers["access-token"]);
      localStorage.setItem('client', response.headers["client"]);
      localStorage.setItem('uid', response.headers["uid"]);
      this.props.history.push("/tasks");
    
      }


    )  
    .catch(error => {console.log(error)})
  }
  
  render() {
    const {email, password} = this.state
    return (
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
                  <Form.Text className="text-muted">
                    Please do not use password that you use for your other accounts.
                  </Form.Text>
            </Form.Group>

            <Button variant="primary" type ="submit">Login</Button>
          </Form>
          </Card>
        </Container>
    )
  }
}

export default Login
