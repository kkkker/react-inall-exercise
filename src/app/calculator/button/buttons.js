import React, { Component } from "react";
import "./buttons.css";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { buttons, handleClick } = this.props;
    return (
      <div className="buttons">
        {buttons.map((button) => {
          return (
            <Button
              key={button}
              button={button}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
}
export default Buttons;
