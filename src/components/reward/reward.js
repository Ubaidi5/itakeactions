import React from "react";
import DropdownMenu from "./dropdown-menu";
import RewardCards from "./reward-cards";
import { connect } from "react-redux";
import { Row, Col } from "antd";

const baseURL = process.env.REACT_APP_BASE_URL_API;

function Rewards(props) {
  console.log("All Rewards", props.allRewards.rewards);
  return (
    <div className="rewards">
      {/* <DropdownMenu /> */}
      <Row justify="space-between" className="reward-cards-wrapper">
        {props.allRewards.rewards.map((reward) => {
          return (
            <Col span={7} className="reward-card">
              <RewardCards
                image={`${baseURL}${reward.image}`}
                title={reward.title}
                slug={reward.slug}
                drawDate={reward.created_at}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

const mapState = (state) => ({
  allRewards: state.allRewards,
});

export default connect(mapState)(Rewards);
