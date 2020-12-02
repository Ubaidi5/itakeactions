import React, { useState, useRef } from "react";
import "../../../styles/headers/header.css";
import logo from "./images/logo-high-res.png";
// import ResponsiveMenu from './responsive-menu';
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "./responsive-navbar";
import Login from "../../modals/LoginModal";
import SignUp from "../../modals/SignUpModal";
import user from "./images/user.png";

const Header = () => {
  
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const input_ = useRef(null);

  const sidebarHandler = () => setSidebarStatus(!sidebarStatus);

  let sidebar;
  let btnstyle = " fa fa-bars";
  const dropDown = false;

    if (sidebarStatus) {
      sidebar = <ResponsiveNavbar />;
      btnstyle = "fa fa-times";
    }
  
  return (
    <div className="area-covering">
        <div className="header">
          <div className="res-menu-btn">
            {/* First div --- menu button */}
            <Link
              className={btnstyle + ` link`}
              to=""
              onClick={sidebarHandler}
            ></Link>
          </div>
          {sidebar}
          <div className="logo-image">
            {/* Second div --- Logo */}
            <Link to="/">
              <img
                className={
                  `logo` + `${authenticate ? " small" : ""}`
                }
                src={logo}
                alt="iTakeAction"
              />
            </Link>
          </div>

          <div className="links">
            {" "}
            {/* Third div --- Links */}
            <Navbar />
          </div>

          <div
            className={
              authenticate ? "side-btn-auth" : "side-btn row"
            }
          >
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                ref={input_}
                placeholder="Search"
                maxLength={30}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                hidden
              />
              <i
                className="search-button fas fa-search"
                onClick={() => {
                  if (
                    !input_.style.width ||
                    input_.style.width === "0px"
                  ) {
                    input_.hidden = false;
                    input_.style.width = "35rem";
                  } else if (search.length) {
                    // search that thing
                  } else if (
                    search.length === 0 &&
                    input_.style.width === "35rem"
                  ) {
                    input_.style.width = 0;
                    input_.hidden = true;
                  }
                }}
              ></i>
            </div>
            {!authenticate && (
              <div>
                <button
                  className="login"
                  onClick={() => setLogin(true)}
                >
                  LOGIN
                </button>
                <button
                  className="signup"
                  onClick={() => setSignup(true)}
                >
                  SIGN UP
                </button>
              </div>
            )}
            {authenticate && (
              <div className="row ml-3">
                <br />
                <br />
                <div>
                  <img
                    src={user}
                    alt="Profile"
                    title="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="ml-2" style={{ textAlign: "left" }}>
                  <p className="mb-0">Charles Omofowan</p>
                  <small className="mt-0" style={{ color: "#057f16" }}>
                    4 ActBit Coins
                  </small>
                </div>
                <i
                  className="fa fa-angle-down"
                  aria-hidden="true"
                  onClick={() => setMenu(!menu)}
                  style={{
                    position: "relative",
                    top: 8,
                    left: 15,
                    fontSize: 35,
                  }}
                ></i>
                {menu && authenticate && (
                  <div className="drop-down">
                    <ul className="m-0 p-0 list-unstyled">
                      <li className="drop-down-items">
                        <Link className="text-decoration-none drop-down-links">
                          <i
                            className="fa fa-user drop-down-icons"
                            aria-hidden="true"
                          ></i>{" "}
                          My Profile
                        </Link>
                      </li>
                      <li className="drop-down-items">
                        <Link className="text-decoration-none drop-down-links">
                          <i
                            className="fa fa-money drop-down-icons"
                            aria-hidden="true"
                          ></i>{" "}
                          My Wallet
                        </Link>
                      </li>
                      <li className="drop-down-items">
                        <Link className="text-decoration-none drop-down-links">
                          <i
                            className="fa fa-cog drop-down-icons"
                            aria-hidden="true"
                          ></i>{" "}
                          Settings
                        </Link>
                      </li>
                      <li className="drop-down-items">
                        <Link className="text-decoration-none drop-down-links">
                          <i
                            className="fa fa-user-plus drop-down-icons"
                            aria-hidden="true"
                          ></i>{" "}
                          Invite Friends
                        </Link>
                      </li>
                      <li className="drop-down-items">
                        <Link className="text-decoration-none drop-down-links">
                          <i
                            class="fa fa-sign-out drop-down-icons"
                            aria-hidden="true"
                          ></i>{" "}
                          LOG OUT
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <Login
          visible={login}
          onCancel={() => setLogin(false)}
        />
        <SignUp show={signup} toggle={() => setSignup(false)} />
      </div>
  );
}
 
export default Header;
