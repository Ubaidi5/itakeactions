import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../../../styles/headers/responsive-navbar.css";
import Navbar from "./navbar";

class ResponsiveNavbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="menu">
          {/* navbar */}
          <Navbar />
          {/* Buttons */}
          <button className="btns">
            <i className="fas fa-sign-in-alt"></i> LOGIN
          </button>
          <br />
          <button className="btns">
            <i className="fas fa-user"></i> SIGN UP
          </button>
          {/* Social Links */}
          <div className="social-links">
            <Link><i className="fa fa-facebook"></i></Link>
            <Link><i className="fa fa-instagram"></i></Link>
            <Link><i className="fa fa-twitter"></i></Link>
            <Link><i className="fa fa-youtube"></i></Link>
          </div>
        </div>
        <div className="backdrop" />
      </div>
    );
  }
}

export default ResponsiveNavbar;