import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-link">
          <Link to={"/"}>Home</Link>
          <Link to={"/calculatrice"}>在线计算器</Link>
          <Link to={"/timer"}>在线倒计时器</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
