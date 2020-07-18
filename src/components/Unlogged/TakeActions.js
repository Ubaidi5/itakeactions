import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home/section5.css';

function TakeActions(props) {
  return (
    <div className="row mb-4 take-action-ipad-design my-left take-more-action-mobile-design">
      <div className="icon-box offset-sm-1 col-sm-3 bg-light actions first-action">
        <img
          src={require("./images/tweet-icon-green.png")}
          alt=""
          className="icon"
        />
        <h3>Tweet</h3>
        <p>
          Thank president Muhammadu Buhari for deducting from Paris Club Refund
          to... <Link>Read more</Link>
        </p>
        <button className="btn tweet">TWEET NOW</button>
      </div>
      <div className="icon-box offset-sm-1 col-sm-3 bg-light actions rest-actions">
        <img
          src={require("./images/petition-icon-green.png")}
          alt=""
          className="icon"
        />
        <h3>Petition</h3>
        <p>
          petitioning Niger State Governor to provide conducive learning
          environment... <Link>Read more</Link>
        </p>
        <button className="btn petition">SIGN PETITION</button>
      </div>
      <div className="icon-box offset-sm-1 col-sm-3 bg-light actions rest-actions">
        <img
          src={require("./images/tweet-icon-green.png")}
          alt=""
          className="icon"
        />
        <h3>Tweet</h3>
        <p>
          Tell the leaderdhip of the National Assembly to urge all members to
          prioritize... <Link>Read more</Link>
        </p>
        <button className="btn tweet">TWEET NOW</button>
      </div>
      {!props.display && <div className="icon-box offset-sm-1 col-sm-3 bg-light actions rest-actions">
        <img
          src={require("./images/tweet-icon-green.png")}
          alt=""
          className="icon"
        />
        <h3>Tweet</h3>
        <p>
          Thank president Muhammadu Buhari for deducting from Paris Club Refund
          to... <Link>Read more</Link>
        </p>
        <button className="btn tweet">TWEET NOW</button>
      </div>}
    </div>
  );
}

export default TakeActions;
