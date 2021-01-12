import React from "react";
import {Link} from "react-router-dom";


const NotAuthorisedPage = () => {
  return (
    <div>
      <h1>401 You are not authorised!</h1>
      <p>Please login or sign up <Link to="/">here</Link>. </p>
    </div>
    
  )
}


export default NotAuthorisedPage;