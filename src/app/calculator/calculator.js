import React, { Component } from "react";
import "./calculator.css";
import Buttons from "./button/buttons";
import { Link } from "react-router-dom";

class Calculator extends Component {
  state = {
    content: "0",
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

  handleClick = (buttonType) => {
    if (buttonType === "=") {
      const result = this.caculatorBy(this.state.formule);
      this.setState({
        content: result,
        formule: "",
      });
    } else if (buttonType === "Clear") {
      this.setState({
        content: "0",
        formule: "",
      });
    } else {
      const formule = this.addFormuleWith(this.state.formule, buttonType);
      this.setState({
        content: formule,
        formule: formule,
      });
    }
  };

  caculatorBy = (formule) => {
    let index = formule.indexOf("x");
    if (index >= 0) {
      return (
        this.caculatorBy(formule.substring(0, index)) *
        this.caculatorBy(formule.substring(index + 1, formule.length))
      );
    }
    index = formule.indexOf("-");
    if (index >= 0) {
      return (
        this.caculatorBy(formule.substring(0, index)) -
        this.caculatorBy(formule.substring(index + 1, formule.length))
      );
    }
    index = formule.indexOf("+");
    if (index >= 0) {
      return (
        this.caculatorBy(formule.substring(0, index)) +
        this.caculatorBy(formule.substring(index + 1, formule.length))
      );
    }
    return Number(formule);
  };

  addFormuleWith = (formule, element) => {
    const length = formule.length;
    if (length === 0 && this.isOperator(element)) {
      return formule;
    }
    if (this.isOperator(formule[length - 1]) && this.isOperator(element)) {
      return formule;
    }
    return formule + element;
  };

  isOperator = (element) => {
    if (element === "+" || element === "-" || element === "x") {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="calculator-main">
        <h2>在线计算器</h2>
        <div className="calculator">
          <input type="text" disabled={true} value={this.state.content} />
          <Buttons
            className="buttons"
            buttons={this.state.buttons}
            handleClick={this.handleClick}
          />
        </div>
        <div className="back-home">
          <Link to="/">回到主页</Link>
        </div>
      </div>
    );
  }
}
export default Calculator;
