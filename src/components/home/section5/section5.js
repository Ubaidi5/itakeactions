import React from "react";
import "../../../styles/home/section5.css";
import LatestAction from "./Latest-action-section/latest-action";
import LatestReward from "./Latest-reward-section/latest-reward";
import TweetSection from "./Tweet-section/tweet-section";
function Section5() {
  return (
    <div className="section5">
      <div className="left-section" style={{width:window.innerWidth<=1300?'100%':'90%'}}>
        <LatestAction />
        <br />
        <br />
        <br /> {/*   we have 3 break tag here for spacing */}
        <LatestReward />
      </div>
      {window.innerWidth > 1300 && (
        <div className="right-section">
          <h1>Citizens making an impact</h1>
          <hr />
          <br />
          <TweetSection />
        </div>
      )}
    </div>
  );
}

export default Section5;
