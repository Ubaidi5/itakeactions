import React, { useState } from "react";
import { Row, Col } from "antd";

const RewardDescription = (props) => {
  const { reward } = props;
  const [state, setState] = useState({
    authenticate: true,
    rewardEntered: true,
    inSufficientBalance: false,
  });
  const styles = {
    icons: {
      fontSize: 25,
      marginRight: 10,
    },
    headers: {
      fontSize: 20,
    },
  };
  return (
    <Row className="reward-description" justify="start" align="middle">
      <Col offset={2} span={4} className="draw-detail">
        <div className="detail-per-draw">
          <p>{reward.winners}</p>
          <p>winner</p>
          <p>per draw</p>
        </div>
        <div className="detail-per-draw">
          <p>{`N/A`}</p>
          <p>days</p>
          <p>to draw</p>
        </div>
        <div className="detail-per-draw">
          <p>{reward.reward_per_winner}</p>
          <p>reward</p>
          <p>per winner</p>
        </div>
      </Col>

      <Col span={17} className="reward-detail">
        <h4 style={styles.headers}>
          <i
            className="fa fa-map-marker"
            aria-hidden="true"
            style={styles.icons}
          ></i>{" "}
          Adamawa, Nigeria.
        </h4>
        <h4 style={styles.headers}>
          <i
            className="fa fa-calendar-o"
            aria-hidden="true"
            style={styles.icons}
          ></i>{" "}
          Draw date: 09/30/2018
        </h4>
        <h4 style={styles.headers}>50 ActBit Coins reqiured</h4>
        {state.authenticate &&
          state.rewardEntered &&
          state.inSufficientBalance && (
            <div>
              <p className="text-danger font-weight-bold">
                You Don't Have Sufficient ActBit Coins To Enter This Reward.
              </p>
              <button
                className="btn"
                style={{
                  width: "auto",
                  padding: "10px 20px 10px 20px",
                  height: "auto",
                }}
              >
                TAKE MORE ACTIONS TO WIN MORE ACTBIT COINS
              </button>
            </div>
          )}
        {state.rewardEntered &&
        state.authenticate &&
        !state.inSufficientBalance ? (
          <div>
            <p
              className="font-weight-bold text-success"
              style={{ fontSize: 17 }}
            >
              You have successfully entered this reward!
            </p>
            <button
              className="btn py-2"
              style={{
                width: "200px",
                height: "auto",
                fontSize: 17,
                border: "none",
                backgroundColor: "green",
                color: "white",
              }}
            >
              SEE MY WALLET
            </button>
          </div>
        ) : (
          !state.inSufficientBalance && (
            <button href="#" className="login-btn-for-reward">
              {state.authenticate ? "ENTER REWARD" : "LOGIN TO ENTER REWARD"}
            </button>
          )
        )}
      </Col>
    </Row>
  );
};

export default RewardDescription;
