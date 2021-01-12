import React from "react";
import Login from "./components/Authentication/SignIn";
import TaskHome from "./components/Task/TaskHome";
import SignUp from "./components/Authentication/SignUp";
import TaskList from "./components/Task/TaskList";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import NotFoundPage from "./components/Pages/404"
import NotAuthorisedPage from "./components/Pages/401"



//imported ProtectedRoute will redirect to 401 if not logged in.
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/home" component={TaskHome}/>
          <Route exact path="/signup" component={SignUp}/>
          <ProtectedRoute exact path="/tasks" component={TaskList}/>
          <Route exact path="/401" component={NotAuthorisedPage}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404"/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
