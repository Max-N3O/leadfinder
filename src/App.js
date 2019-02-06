import React, { Component } from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import DisplayResults from "./components/displayResults";
import { Switch, Route, Redirect } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // console.log("this.props.response: " + this.props.response)
    // console.log("this.state.response: " + this.state.response)
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=> (
            (this.props.response) ? <Redirect push to="/display-results"/> : <Home/>
          )} />
          <Route path="/display-results" component={DisplayResults} />
        </Switch>
      </div>
    );
  }
}

export default App;
