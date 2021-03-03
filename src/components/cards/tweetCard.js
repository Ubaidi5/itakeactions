import React from "react";
import tweetIcon from "../../assets/tweet-icon-green.png";
import petetionIcon from "../../assets/petition-icon-green.png";
import Button from "../../components/buttons";

const TweetCard = (props) => {
  const { type, title } = props;
  return (
    <div
      className="tweet-card"
      style={{
        width: 240,
        margin: "0 auto 50px auto",
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
        padding: "20px",
        borderRadius: 24,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={type === "tweet" ? tweetIcon : petetionIcon}
        alt={type === "tweet" ? "tweetIcon" : "petetionIcon"}
        style={{ width: 100 }}
      />
      <h5>{type}</h5>
      <p
        style={{
          height: 80,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "break-spaces",
          textAlign: "left",
        }}
      >
        {title}
      </p>
      <Button size="large">
        {type === "tweet" ? "TWEET NOW" : "PETETION"}
      </Button>
    </div>
  );
};

export default TweetCard;
