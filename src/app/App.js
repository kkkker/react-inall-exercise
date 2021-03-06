import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./navbar/navbar";
import Home from "./home/Home";
import Calculator from "./calculator/calculator";
import Timer from "./timer/timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar className="nav-bar" />
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/timer" component={Timer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
