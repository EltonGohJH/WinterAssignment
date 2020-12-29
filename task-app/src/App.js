// import './App.css';
import Login from "./components/Authentication/Sign_in";
import Taskindex from "./components/Task/Taskindex"
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/tasks" component={Taskindex}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
