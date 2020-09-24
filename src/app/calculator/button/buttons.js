import React, { Component } from "react";
import "./buttons.css";
import Button from "./button";

class Buttons extends Component {
  render() {
    const buttons = this.props.buttons;
    return (
      <div className="buttons">
        {buttons.map((button) => {
          return <Button key={button} className="button" button={button} />;
        })}
      </div>
    );
  }
}
export default Buttons;
