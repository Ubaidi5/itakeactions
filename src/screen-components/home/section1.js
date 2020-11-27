import React from "react";
import Button from "../../components/buttons";
import "../../styles/home/section1.style.css";

const Section1 = (props) => {
  const achivedItems = [
    {
      id: 1,
      number: 1395,
      title: "Active citizens",
    },
    {
      id: 2,
      number: 1870,
      title: "Actions taken",
    },
    {
      id: 3,
      number: 70,
      title: "Campaigns",
    },
  ];
  return (
    <div>
      <div className="overview">
        <div className="overview-social-links">
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
        </div>

        <div className="join-the-community">
          <p
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            A community of active citizen taking actions for education
          </p>
          <Button
            size="large"
            style={{
              marginTop: "0.5cm",
              width: 300,
              backgroundColor: "#f3e404",
              color: "#000",
              fontWeight: 600,
            }}
          >
            JOIN THE COMMUNITY
          </Button>
        </div>
      </div>

      <div className="achivements-container">
        {achivedItems.map((item) => (
          <div className="achivement-box">
            <p
              style={{
                margin: 0,
                fontSize: window.innerWidth <= 480 ? "25pt" : "45pt",
              }}
            >
              {item.number}
            </p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
