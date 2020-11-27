import React from "react";
import tweetIcon from "../../assets/tweet-icon-green.png";
import petetionIcon from "../../assets/petition-icon-green.png";

const TweetCard = (props) => {
  const { type, title } = props;
  return (
    <div
      className="tweet-card"
      style={{
        width: 250,
        margin: "0 auto 50px auto",
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
        padding: "20px 30px",
        borderRadius: 24,
        backgroundColor: "#fff",
      }}
    >
      <img
        src={type === "tweet" ? tweetIcon : petetionIcon}
        alt={type === "tweet" ? "tweetIcon" : "petetionIcon"}
        style={{ width: 100 }}
      />
      <h5>{type}</h5>
      <p>{title}</p>
      <button>{type === "tweet" ? "TWEET NOW" : "PETETION"}</button>
    </div>
  );
};

export default TweetCard;
