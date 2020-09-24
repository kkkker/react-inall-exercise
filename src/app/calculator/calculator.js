import React, { Component } from "react";
import "./calculator.css";
import Buttons from "./button/buttons";
import { Link } from "react-router-dom";

class Calculator extends Component {
  status = {
    content: "1",
    formule: "",
    buttons: [
      "+",
      "-",
      "x",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "Clear",
      "=",
    ],
  };
  render() {
    return (
      <div className="calculator-main">
        <h2>在线计算器</h2>
        <div className="calculator">
          <input type="text" disabled={true} value={this.status.content} />
          <Buttons className="buttons" buttons={this.status.buttons} />
        </div>
        <div className="back-home">
          <Link to="/">回到主页</Link>
        </div>
      </div>
    );
  }
}
export default Calculator;
