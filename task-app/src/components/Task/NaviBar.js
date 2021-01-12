import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";



function Navibar() {
  const history = useHistory();
  //delete the session and push to the login page.
  const signOutHandler = () => {
    axios.delete('http://localhost:3001/api/v1/auth/sign_out', { 
      headers: {
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'expiry': localStorage.getItem('expiry'),
        'uid': localStorage.getItem('uid'),
        'token-type': localStorage.getItem('token-type')
      }}
    )
    .then(response => {
        history.push("/");
    })           
  }
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/tasks">All Tasks</Nav.Link>
                <Nav.Link onClick={()=> signOutHandler()}> Sign out</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    );
}
  
  export default Navibar;