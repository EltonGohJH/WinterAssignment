import React , {useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";


function ProtectedRoute( {component: Component, ...rest}) {
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);
  
  //axios is async, the variable isLoading will check when the promise is resolved and redirect if necessary.
  //useEffect is needed to handle change in state
  useEffect(() => {
    const getAuth = async () => {
      await axios.get('https://task-api-2021.herokuapp.com/api/v1/auth/validate_token', { 
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'client': localStorage.getItem('client'),
          'expiry': localStorage.getItem('expiry'),
          'uid': localStorage.getItem('uid'),
          'token-type': localStorage.getItem('token-type')
        }}
      )
      .then(response => {
        setAuth(response.data.success);
        setLoading(false);
      })
      .catch((error) => {
        setAuth(false);
        setLoading(false); 
      });
  };
    getAuth();
  }, [isAuth, isLoading]);

  return (
    <Route 
      {...rest}
      render={(props) => {
        if (isLoading) {
          return <div><h1>Loading...</h1></div>
        } else {
          if (isAuth) {
            return <Component/>
          } else {  
            return <Redirect to="/401"/>
          }
        }

      }}
    />
  );
}


    
export default ProtectedRoute;

