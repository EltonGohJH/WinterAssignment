import React from "react";
import Login from "./components/Authentication/SignIn";
import TaskHome from "./components/Task/TaskHome";
import SignUp from "./components/Authentication/SignUp";
import TaskList from "./components/Task/TaskList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={TaskHome}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/tasks" component={TaskList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
