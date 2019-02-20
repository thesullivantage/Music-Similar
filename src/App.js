import React, { Component } from 'react';
// import logo from './logo.svg';
import './master.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Instagram from "./pages/Instagram";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/instagram" component={Instagram}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
