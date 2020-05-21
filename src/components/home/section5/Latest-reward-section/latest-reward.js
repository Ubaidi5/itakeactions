import React from "react";
import { Carousel } from "react-bootstrap";

class LatestReward extends React.Component {
  render() {
    return (
      <div className="latest-rewards">
        <h1>Latest Rewards</h1>
        <hr />
        <br />
        {window.innerWidth <= 1300 && this.MobileView()}
        {window.innerWidth > 1300 && this.NormalView()}
      </div>
    );
  }

  MobileView() {
    return (
      <Carousel controls={false} interval={3000}>
        <Carousel.Item>
          <div className="image-box">
            <img
              src={require("../../images/GLO.jpg")}
              alt=""
              className="image"
            />
            <h4>GLO 500 Recharge</h4>
            <h3>15</h3>
            <button className="btn view-rewards">VIEW REWARDS</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-box">
            <img
              src={require("../../images/Airtel.jpg")}
              alt=""
              className="image"
            />
            <h4>AIRTEL 500 Recharge</h4>
            <h3>15</h3>
            <button className="btn view-rewards">VIEW REWARDS</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-box">
            <img
              src={require("../../images/mtncard.jpg")}
              alt=""
              className="image"
            />
            <h4>MTN 500 Recharge</h4>
            <h3>15</h3>
            <button className="btn view-rewards">VIEW REWARDS</button>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }

  NormalView() {
    return (
      <div className="box-wrapper">
        <div className="image-box">
          <img src={require("../../images/GLO.jpg")} alt="" className="image" />
          <h4>GLO 500 Recharge</h4>
          <h3>15</h3>
          <button className="btn view-rewards">VIEW REWARDS</button>
        </div>
        <div className="image-box">
          <img
            src={require("../../images/Airtel.jpg")}
            alt=""
            className="image"
          />
          <h4>AIRTEL 500 Recharge</h4>
          <h3>15</h3>
          <button className="btn view-rewards">VIEW REWARDS</button>
        </div>
        <div className="image-box">
          <img
            src={require("../../images/mtncard.jpg")}
            alt=""
            className="image"
          />
          <h4>MTN 500 Recharge</h4>
          <h3>15</h3>
          <button className="btn view-rewards">VIEW REWARDS</button>
        </div>
      </div>
    );
  }
}

export default LatestReward;
