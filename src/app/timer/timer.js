import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./timer.css";

class Timer extends Component {
  state = {
    timeShow: "Start",
    totalTime: 0,
    isTimerRuning: false,
  };

  handleChange = (event) => {
    this.setState({
      totalTime: event.target.value,
    });
  };

  handleClick = () => {
    let totalTime = this.state.totalTime;
    this.setState({
      timeShow: totalTime + " Seconds",
      totalTime: this.state.totalTime - 1,
    });
    let timer = setInterval(() => {
      let totalTime = this.state.totalTime;
      if (totalTime <= 0) {
        this.setState({
          timeShow: "End",
        });
        clearInterval(timer);
      } else {
        this.setState({
          timeShow: totalTime + " Seconds",
          totalTime: this.state.totalTime - 1,
        });
      }
    }, 1000);
  };

  render() {
    return (
      <div className="timer-main">
        <h2>在线倒计时器</h2>
        <div className="timer">
          <div className="time-set">
            <div className="time">
              <label htmlFor="time">设置时间</label>
              <input
                type="number"
                id="time"
                onChange={() => this.handleChange(event)}
              />
            </div>
            <div className="time-button">
              <button onClick={() => this.handleClick()}>Start</button>
            </div>
          </div>
          <div className="time-show">
            <p>{this.state.timeShow}</p>
          </div>
        </div>
        <div className="back-home">
          <Link to="/">回到主页</Link>
        </div>
      </div>
    );
  }
}

export default Timer;
