import React, { Component } from "react";
import "../../../styles/reward/rewards-individual-page.css";
import petetionIcon from "../../home/images/petition-icon-green.png";
import tweetIcon from "../../home/images/tweet-icon-green.png";
import RewardDescription from "./reward-description";
import broughtByNobleMissions from "../images/broughtByNobleMissions.jpg";
import { Row, Col } from "antd";

const baseURL = process.env.REACT_APP_BASE_URL_API;

const RewardsIndividualPage = (props) => {
  const { data } = props;
  return (
    <Row className="rewards-individual-page" id="t" justify="space-between">
      <Col span={16}>
        <h1>{data.reward.title}</h1>
        <div className="reward-image-wrapper">
          <img src={`${baseURL}${data.reward.image}`} />
        </div>

        <RewardDescription reward={data.reward} />
        {/* <RewardSpecification /> */}
        <div className="reward-specification">
          <h3 id="specification-heading">Specification:</h3>
          <ul className="specifications">
            <li>Functions: Passometer, Sleep Tracker</li>
            <li>Message Remainder, Call Remainder, Push</li>
            <li>Message, Alarm Clock, Week</li>
            <li>Battery Capacity: 120-180mAh</li>
            <li>RAM: 128MB</li>
            <li>Waterproof Grade: Life Waterproof</li>
            <li>Brand Material: Silica Gel</li>
            <li>App Download Available: Yes</li>
            <li>Style: Sport</li>
            <li>Case Material: Alloy</li>
            <li>Movement Type: Electronic</li>
            <li>Display Size: 1.3inches</li>
          </ul>
          <br />
          <h4 style={{ display: "inline-block" }} id="Brought">
            Brought By:
          </h4>
          <img
            style={{ position: "relative", top: -5 }}
            src={broughtByNobleMissions}
            alt="Noble Missions"
            id="noble-mission-logo"
          />
        </div>
      </Col>

      {/* ---------------------------------- */}
      {/* Tweet and Petetion Section Heading */}
      {/* ---------------------------------- */}
      <Col span={7}>
        <div className="tweet-section">
          <h4>Earn more ActBit Coins</h4>
          <div
            style={{
              width: "60%",
              margin: "auto",
              background: "#343434",
              height: 3,
              marginBottom: 24,
            }}
          />
          {/* Mapping Tweets */}
          {data.actions.map((action, index) => {
            console.log("Tweet ---->", action);
            return (
              <div className="tweet-card" key={index}>
                <img
                  src={action.type === "tweet" ? tweetIcon : petetionIcon}
                  alt={action.type === "tweet" ? "tweetIcon" : "petetionIcon"}
                  style={{ width: 100 }}
                />
                <h5>{action.type}</h5>
                <p>{action.title}</p>
                <button className="tweet-card-btn">
                  {action.type === "tweet" ? "TWEET NOW" : "PETETION"}
                </button>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default RewardsIndividualPage;
