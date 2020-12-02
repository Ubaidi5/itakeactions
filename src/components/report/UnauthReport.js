import React from "react";
import MediaQuery from "react-responsive";
import "../../styles/report/unauth-report.css";

const Report = props => {
  return (
    <div className="report-container">
      <MediaQuery minDeviceWidth={1000}>
        <div className="report-background" />
        <div className="report-content">
          <h3>You need to login to submit a report</h3>
          <br />
          <button className="report-login-btn">LOGIN</button>
          Or
          <button className="report-signup-btn">SIGN UP</button>
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={999}>
        <div className="report-content-mobile">
          <h3>You need to login to submit a report</h3>
          <br />
          <div className="report-content-mobile-button-section">
            <button className="report-login-btn" style={{ margin: "10px" }}>
              LOGIN
            </button>
            <p style={{ color: "white", zIndex: "1", alignSelf: "center" }}>
              Or
            </p>
            <button className="report-signup-btn" style={{ margin: "10px" }}>
              SIGN UP
            </button>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Report;
