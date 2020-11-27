import React from "react";
import Button from "../../components/buttons";

const RewardCard = (props) => {
  const { amount, title } = props;
  return (
    <div
      style={{
        width: 240,
        // height: 290,
        margin: "0 auto 50px auto",
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
        padding: "20px",
        borderRadius: 24,
        backgroundColor: "#fff",
      }}
    >
      <img
        src="http://localhost:404/static/media/GLO.2e07963f.jpg"
        alt={"reward image"}
        style={{ width: "100%", height: "auto", maxHeight: 150 }}
      />
      <p style={{ fontSize: 20, margin: "12px 0", fontWeight: 700 }}>{title}</p>
      <p style={{ fontSize: 20, fontWeight: 700 }}>{amount}</p>
      <Button size="large">View Rewards</Button>
    </div>
  );
};

export default RewardCard;
