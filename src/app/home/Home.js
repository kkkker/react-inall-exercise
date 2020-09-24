import React from "react";
import "./home.less";
import Tool from "./tool/tool";

const Home = () => {
  const status = {
    tools: [
      {
        image: require("../../images/calculator.png"),
        nameEng: "calculator",
        nameCh: "计算器",
      },
      {
        image: require("../../images/timer.png"),
        nameEng: "timer",
        nameCh: "倒计时器",
      },
    ],
  };

  return (
    <div className="home-main">
      <div className="introduce">
        <div className="introduce-content"></div>
        <h2>在线实用工具</h2>
      </div>
      <div className="tools">
        {status.tools.map((tool) => {
          return (
            <Tool
              key={tool.nameEng}
              image={tool.image}
              nameEng={tool.nameEng}
              nameCh={tool.nameCh}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
