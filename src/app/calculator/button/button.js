import React, { Component } from "react";
import "./buttons.css";

class Button extends Component {
  render() {
    const { button, handleClick } = this.props;
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
    return (
      <button
        className={`button ${buttonType}`}
        onClick={() => handleClick(button)}
      >
        {button}
      </button>
    );
  }
}
export default Button;
