import React from "react";
import TweetCard from "../../components/cards/tweetCard";
import RewardCard from "../../components/cards/rewardCard";
import "../../styles/home/section4.style.css";
import userIcon from "../../assets/user.png";
import { Row, Col } from "antd";

const Section3 = () => {
  const a = [1, 2, 3];
  return (
    <Row style={{ width: "90%", margin: "40px auto" }} justify="space-between">
      <Col span={window.innerWidth <= 480 ? 24 : 15}>
        {/* Latest Action ---- Tweets and Petetions */}
        <h2 style={{ textAlign: "center" }} className="home-setcion4-heading">
          Latest Actions
        </h2>
        <div className="home-tweet-section-wrapper">
          {a.map(() => {
            return (
              <TweetCard
                type="tweet"
                title="It was an exciting day for the 380 pupils of Hayatudeen Islamic Primary School; a conventional school in Tungan Makama, Niger State, Nigeria when they saw government officials mounting a signpost in their school compound indicating that their school was admitted into the National Home Grown School Feeding Programme"
              />
            );
          })}
        </div>

        {/* Latest Rewards ---- Rewards Description */}
        <h2 style={{ textAlign: "center" }} className="home-setcion4-heading">
          Latest Rewards
        </h2>
        <div className="home-reward-section-wrapper">
          {a.map(() => {
            return <RewardCard title="Wood Golem Silver" amount={15} />;
          })}
        </div>
      </Col>
      <Col span={window.innerWidth <= 480 ? 0 : 8}>
        <h2 style={{ textAlign: "center" }} className="home-setcion4-heading">
          Citizens making an impact
        </h2>
        <div>
          {a.map((_, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 8,
                  padding: 8,
                  background: index % 2 === 0 ? "#F2F2F2" : "#fff",
                }}
              >
                <img
                  src={userIcon}
                  alt="user"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    marginRight: 24,
                  }}
                />
                <p>
                  Susan R. tweeted "
                  <strong>
                    Tell the leadership of the assembly to urge..."
                  </strong>
                </p>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default Section3;
