import React from "react";
import "../../styles/reward/reward-cards.css";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import moment from "moment";

const RewardCards = props => {
  const { title, slug, image, drawDate } = props;
  return (
    <div>
      <img src={image} alt="" className="reward-image" />
      <h4>{title}</h4>
      <h5>50 ActBit coins required</h5>
      <h5>Draw date: {moment(drawDate).format("DD/MM/YYYY")}</h5>
      <Link to={`/reward/${slug}`} className="view-rewards-btn">
        <button className="btn">VIEW DETAILS</button>
      </Link>
    </div>
    //    <div className="next-btns">
    //                 <buttons className='trackActive' id='track'>1</buttons>
    //                 <buttons id='track'>2</buttons>
    //                 <buttons id='track'>3</buttons>
    //             </div>

    //    <MediaQuery maxDeviceWidth={1000}>
    //     <div style={{ position: "relative", height: "10em" }}>
    //       <i
    //         className="fas fa-chevron-circle-up up-button-tablet-design"
    //         title="Go to top"
    //         onClick={() => {
    //           window.scrollTo(0, 0);
    //         }}
    //         style={{
    //           position: "absolute",
    //           cursor: "pointer",
    //           top: "20%",
    //           left: "43%",
    //           display: "inline-block",
    //           margin: "10px auto",
    //           fontSize: "48px",
    //           borderRadius: "50%",
    //           border: "2px solid black",
    //           backgroundColor: "black",
    //           color: "white",
    //         }}
    //       ></i>
    //     </div>
    //   </MediaQuery>
  );
};

export default RewardCards;
