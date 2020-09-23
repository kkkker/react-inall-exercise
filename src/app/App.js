import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./navbar/navbar";
import Home from "./home/Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <NavBar className="nav-bar" />
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Home} />
          <Route exact path="/timer" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
