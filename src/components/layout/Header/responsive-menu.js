import React from "react";
import "../../../styles/headers/responsive-menu.css";
import { Link } from "react-router-dom";

const ResponsiveMenu = () => {
  const styles = { display: "block" };

  const menuhide = () => {
    if (styles.display === "block") styles.color = "white";
  }
  return (
    <div style={styles} className="responsive-menu">
      <i className="fa fa-times cancel-btn" onClick={menuhide}></i>
      <div className="responsive-links">
        <ul>
          <Link to="/take-action">
            <li>TAKE ACTIONS</li>
          </Link>
          <Link to="/reward">
            <li>REWARD</li>
          </Link>
          <Link to="/submit-a-report">
            <li>SUBMIT A REPORT</li>
          </Link>
          <Link to="/blog">
            <li>BLOG</li>
          </Link>
          <Link to="/about-us">
            <li>ABOUT US</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
