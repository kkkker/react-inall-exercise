import React from "react";
import { Link } from "react-router-dom";
import "./tool.css";

const Tool = (props) => {
  const { image, nameEng, nameCh } = props;
  return (
    <div className="tool">
      <div className="tool-image">
        <Link to={nameEng}>
          <img src={image} alt={nameEng} />
        </Link>
      </div>
      <div className="tool-name">
        <Link to={nameEng}>{nameCh}</Link>
      </div>
    </div>
  );
};

export default Tool;
