import React, { Component } from "react";
import "../../styles/reward/dropdown-menu.css";
import rewardPic from "./images/rewardPic.png";
import { Dropdown, DropdownButton } from "react-bootstrap";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WhatSelect: "",
      WhatTitle: "What",
      WhenSelect: "",
      WhenTitle: "When",
      WhereSelect: "",
      WhereTitle: "Where",
      search: "",
      states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ]
    };
  }

  onChangeHandler = async e => {
    await this.setState({ select: e, title: e });
  };

  render() {
    return (
      <div className="reward-head">
        <div
          className="catlog"
          style={{ backgroundImage: `url(${rewardPic})` }}
        >
          <h1 style={{ color: "#FFF" }}>
            It's rewarding to take actions for Nigeria's public education!
          </h1>
          <br />
          <h3 style={{ color: "#F3E404", fontWeight: "500" }}>
            You earn ActBit Coins for every action you take. <br /> Use the
            coins to enter to win rewards.
          </h3>
        </div>
        <div className="dropdown-menus row mt-5">
          <div className="what-drop-down">
            <DropdownButton
              className="customdropdown"
              onSelect={this.onChangeHandler}
              value={this.state.WhatSelect}
              id="mycustomdropdown"
              title={this.state.WhatTitle}
            >
              <Dropdown.Item className="myclass" eventKey="Gift">
                Gift
              </Dropdown.Item>
              <Dropdown.Item className="myclass" eventKey="Discount">
                Discount
              </Dropdown.Item>
              <Dropdown.Item className="myclass" eventKey="Event Ticket">
                Event Ticket
              </Dropdown.Item>
              <Dropdown.Item className="myclass" eventKey="Select all">
                Select all
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="when-drop-down">
            <DropdownButton
              className="customdropdown"
              onSelect={this.onChangeHandler}
              value={this.state.WhenSelect}
              id="mycustomdropdown"
              title={this.state.WhenTitle}
            >
              <Dropdown.Item className="myclass" eventKey="Current Rewards">
                Current Rewards
              </Dropdown.Item>
              <Dropdown.Item className="myclass" eventKey="Coming Rewards">
                Coming Rewards
              </Dropdown.Item>
              <Dropdown.Item className="myclass" eventKey="Previous Rewards">
                Previous Rewards
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="where-drop-down">
            <DropdownButton
              className="customdropdown"
              onSelect={this.onChangeHandler}
              value={this.state.WhereSelect}
              id="mycustomdropdown"
              title={this.state.WhereTitle}
            >
              {this.state.states.map(e => (
                <Dropdown.Item className="myclass" eventKey={e}>
                  {e}
                </Dropdown.Item>
              ))}
              <Dropdown.Item className="myclass" eventKey="Select all">
                Select all
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <input
              className="search-rewards"
              placeholder="Search rewards"
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
              type="text"
              maxLength="50"
            />
            <i class=" search-rewards-icon fas fa-search"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
