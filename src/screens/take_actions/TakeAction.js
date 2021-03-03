import React from "react";
import { Row, Col } from "antd";
import Dropdown from "../../components/inputs/dropdown";
import TweetCard from "../../components/cards/tweetCard";
import boardBackground from "../../assets/board-background.png";
import "../../styles/take-actions/takeAction.style.css";

const TakeAction = (props) => {
  const option = [
    { name: "Show All", value: "Show All" },
    { name: "Email", value: "Email" },
    { name: "Tweet", value: "Tweet" },
    { name: "Petetion", value: "Petetion" },
    { name: "Donate", value: "Donate" },
  ];
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="page-header-container">
        <div
          style={{ backgroundImage: `url(${boardBackground})` }}
          className="header-text-wrapper"
        >
          <h1 style={{ color: "#fff" }}>
            Take Actions to contribute to Nigeria's public education!
          </h1>
          <h4 style={{ color: "yellow" }}>
            You earn ActBit Coins for every action you take.
            <br />
            Use the coins to enter to win rewards.
          </h4>
        </div>
      </div>

      <div className="action-dropdown-filter">
        <Dropdown options={option} value="" />
      </div>

      <div className="take-action-tweet-wrapper">
        <Row wrap={true}>
          {a.map((_, index) => {
            return (
              <Col sm={24} md={12} lg={8} xl={8} xxl={6}>
                <TweetCard
                  title={"petetion"}
                  type={index % 2 == 0 ? "tweet" : "petetion"}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default TakeAction;
