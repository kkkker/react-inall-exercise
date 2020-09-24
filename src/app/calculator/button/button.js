import React, { Component } from "react";
import "./buttons.css";

class Button extends Component {
  render() {
    const button = this.props.button;
    let buttonType = "";
    if (button === "+" || button === "-" || button === "x") {
      buttonType = "operator";
    } else if (button === "=") {
      buttonType = "result";
    } else if (button === "Clear") {
      buttonType = "clear";
    } else {
      buttonType = "number";
    }
    return <button className={`button ${buttonType}`}>{button}</button>;
  }
}
export default Button;
