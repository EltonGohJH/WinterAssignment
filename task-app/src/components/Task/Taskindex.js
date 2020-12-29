import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { Container, Button, Form } from 'react-bootstrap';
import './Taskindex.css';

class Taskindex extends Component {
  constructor(props) {
    super(props)
      this.state = {
          tasks: [],
          title: "",
          description: "",
          start_time: "",
          deadline: "",

      }
  }



getTasks() {
  axios.get('http://localhost:3001/api/v1/tasks', { 
    headers: {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
    }}
  )
  .then(response => {
    this.setState({tasks: response.data})
  })
        
}

submitHandler = event => {
  event.preventDefault()
  axios.post('http://localhost:3001/api/v1/tasks', {task: {title: this.state.title, description: this.state.description, start_time: this.state.start_time, deadline: this.state.deadline} }, { 
    headers: {
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
    'uid': localStorage.getItem('uid')
    }}
  )
  .then(() => {this.getTasks()})
        
}

titleChangeHandler = event => {
  this.setState({ title: event.target.value }) 
}
descriptionChangeHandler = event => {
  this.setState({ description: event.target.value }) 
}
start_timeChangeHandler = event => {
  this.setState({ start_time: event.target.value }) 
}
deadlineChangeHandler = event => {
  this.setState({ deadline: event.target.value }) 
}


componentDidMount() {
  this.getTasks()
}
    
    render() {
      // const input = {title: this.state.title, description: this.state.description, start_time: this.state.start_time, deadline: this.state.deadline}
      return (
        <div>
          <Container className="InputContainer">
            <Form className="InputForm" onSubmit ={this.submitHandler}>
              <Form.Row>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" value={this.state.title} onChange={this.titleChangeHandler} />
                </Form.Group>


                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Description" value={this.state.description} onChange={this.descriptionChangeHandler}/>
                </Form.Group>

                <Form.Group controlId="formStartDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" placeholder="StartDate" value={this.state.start_time} onChange={this.start_timeChangeHandler} />
                </Form.Group>

                <Form.Group controlId="formDeadline">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control type="date" placeholder="Deadline" value={this.state.deadline} onChange={this.deadlineChangeHandler} />
                </Form.Group>

                <Button className="SubmitButton"variant="primary"  size="sm" type="submit">Submit</Button>
              </Form.Row>
            </Form>
          </Container>
            {this.state.tasks.map((task) => {
              return(
                <Container className="TableContainer" >
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Start time</th>
                        <th>Deadline</th>
                        <th>Completed_time</th>
                        <th>Completed?</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> {task.title} </td>
                        <td> {task.description} </td>
                        <td> {task.start_time} </td>
                        <td> {task.deadline} </td>
                        <td> {task.completed_time} </td>
                        <td> {task.completed} </td>
                        <td> <Button variant="danger">Delete</Button> </td>
                      </tr>

                    </tbody>
                  </Table>
                </Container>
                
              )
            })}

        </div>
      )
    }
}

export default Taskindex
