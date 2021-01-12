import React from "react";
import {Link} from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Not found!</h1>
      <p>Please proceed to <Link to="/home">home</Link> if you are logged in. To login/sign up click <Link to="/">here</Link>. </p>
    </div>
    
  )
}
export default NotFoundPage;