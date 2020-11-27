import React from "react";
import takeActionIcon from "../../assets/take-action.png";
import getRewardIcon from "../../assets/get-reward.png";
import seeImpactIcon from "../../assets/see-impact.png";
import "../../styles/home/section2.style.css";

const Section2 = (props) => {
  return (
    <div style={{ marginTop: 64 }}>
      <h1 className="our-participation">
        We make it rewarding for you to participate in the development of public
        education in Nigeria.
      </h1>
      <div className="this must be delete">
        <div className="section3">
          <div className="sec first">
            <img src={takeActionIcon} alt="Take Action Icon" />
            <h3>Take Actions</h3>
            <p>
              Join the community and start taking actions to improve public
              education in Nigeria.
            </p>
          </div>
          <div className="sec second">
            <img src={getRewardIcon} alt="Get Reward Icon" />
            <h3>Get Rewards</h3>
            <p>
              You earn ActBit coins for every action you take. Use the coin to
              enter to win rewards.
            </p>
          </div>
          <div className="sec third">
            <img src={seeImpactIcon} alt="See Impact Icon" />
            <h3>See Impact</h3>
            <p>
              Follow us to see how your actions are making impact in the lives
              of millions of Nigerians.
            </p>
          </div>
        </div>
        <div className="learn-more">
          <button className="green-center-btn">LEARN MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
