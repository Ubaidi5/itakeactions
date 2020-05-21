import React from "react";
import "../../../styles/home/achivement.css";

function AchivementComponentTemplate(props) {
  return (
    <div className="box">
      <p className="number">{props.number}</p>
      <p className="title">{props.title}</p>
    </div>
  );
}

export default AchivementComponentTemplate;
