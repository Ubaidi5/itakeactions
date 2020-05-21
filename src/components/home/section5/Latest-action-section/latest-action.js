import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

class LatestAction extends React.Component {
  render() {
    return (
      <div className="latest-actions">
        <h1>Latest Actions</h1>
        <hr />
        <br />
        {window.innerWidth > 1300 && this.NormalView()}
        {window.innerWidth <= 1300 && this.Mobview()}
      </div>
    );
  }
  NormalView() {
    return (
      <div className="box-wrapper">
        <div className="icon-box">
          <img
            src={require("../../images/tweet-icon-green.png")}
            alt=""
            className="icon"
          />
          <h3>Tweet</h3>
          <p>
            Thank president Muhammadu Buhari for deducting from Paris Club
            Refund to... <Link>Read more</Link>
          </p>
          <button className="btn tweet">TWEET NOW</button>
        </div>
        <div className="icon-box">
          <img
            src={require("../../images/petition-icon-green.png")}
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
        <div className="icon-box">
          <img
            src={require("../../images/tweet-icon-green.png")}
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
      </div>
    );
  }

  Mobview() {
    return (
      <Carousel controls={false} interval={5000}>
        <Carousel.Item>
          <div className="icon-box">
            <img
              src={require("../../images/petition-icon-green.png")}
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="icon-box">
            <img
              src={require("../../images/petition-icon-green.png")}
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="icon-box">
            <img
              src={require("../../images/tweet-icon-green.png")}
              alt=""
              className="icon"
            />
            <h3>Tweet</h3>
            <p>
              Tell the leaderdhip of the National Assembly to urge all members
              to prioritize... <Link>Read more</Link>
            </p>
            <button className="btn tweet">TWEET NOW</button>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default LatestAction;