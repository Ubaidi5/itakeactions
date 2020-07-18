import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import MediaQuery from 'react-responsive';
import TakeActions from "./TakeActions";
import "../../styles/Unlogged/vote.css";

class VoteUnlogged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      voted: false,
      opinionSubmitted: false,
      opinion: "",
      selectedOptions: {
        opt1: false,
        opt2: false,
        opt3: false
      }
    };
  }
  handleRadio = e => {
    e = e.target.dataset.options;
    let obj = this.state.selectedOptions;
    switch (e) {
      case "opt1":
        if (obj["opt1"]) obj = { opt1: false, opt2: false, opt3: false };
        else obj = { opt1: true, opt2: false, opt3: false };
        break;
      case "opt2":
        if (obj["opt2"]) obj = { opt1: false, opt2: false, opt3: false };
        else obj = { opt1: false, opt2: true, opt3: false };
        break;
      default:
        if (obj["opt3"]) obj = { opt1: false, opt2: false, opt3: false };
        else obj = { opt1: false, opt2: false, opt3: true };
    }
    this.setState({ selectedOptions: obj });
  };

  handleSubmit(e) {
    e.preventDefault();
    alert("submitted");
  }

  render() {
    function myFunc(e){
      e.preventDefault();
      var l = document.getElementsByClassName("rest-actions").length;
      var i = 0;
      while(i < l){
        document.getElementsByClassName("rest-actions")[i].style.display = "block";
        i++;
      }
    }

    return (
      <>
        <div className="mt-5">
          <div className="row mb-5 mobile-row-twitter">
            <div className="offset-sm-1 col-sm-5 text-aligning ipad-design">
              <h3 className="font-weight-bold">
                Vote recommendations for the new Minister of Education
              </h3>
              <div
                className="justify-text mb-4"
                style={{ fontSize: 15, fontWeight: 600 }}
              >
                <p>
                  The president of Nigeria, President Muhammadu Buhari has sworn
                  in the new ministers for his second term in office on the 21st
                  of August, 2019. And the new minister of education is Mallam
                  Adamu Adamu.
                </p>
                <p>
                  As an active citizen, please submit ideas and recommend what
                  you think the new minister, Mallam Adamu Adamu should focus
                  most of his attention on, during his first 180 days (6 months)
                  in office. We will compile and submit all recommendations to
                  the new minister. Thank You!
                </p>
              </div>
              <div className="mobile-design-links">
              <Link className="text-decoration-none">
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#3b5998",
                    borderRadius: "50%",
                    padding: "8px 15px"
                  }}
                  className="fa fa-facebook fa-2x"
                ></i>
              </Link>
              <Link className="text-decoration-none">
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#00acee",
                    borderRadius: "50%",
                    padding: "8px 10px"
                  }}
                  className="ml-4 fa fa-twitter fa-2x"
                ></i>
              </Link>
              <Link className="text-decoration-none">
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#db4a39",
                    borderRadius: "50%",
                    padding: "8px 4px"
                  }}
                  className="ml-4 fa fa-google-plus fa-2x"
                ></i>
              </Link>
              <Link className="text-decoration-none">
                <i
                  style={{
                    color: "white",
                    backgroundColor: "#0e76a8",
                    borderRadius: "50%",
                    padding: "8px 10px"
                  }}
                  className="ml-4 fa fa-linkedin fa-2x"
                ></i>
              </Link>
              </div>
            </div>
            <div className="col-sm-4 offset-sm-1 ipad-design">
              <div
                className={`${
                  this.props.isopinion ? "p-4" : "p-5"
                } font-weight-bold`}
                style={{
                  backgroundColor: "#f2f0ed",
                  fontSize: 12,
                  borderRadius: 18
                }}
              >
                <div className="text-center mb-4">
                  <strong className="text-center">
                    What should the new Minister of Education, Mallam Adamu
                    Adamu focus on during his first 180 days in office?
                  </strong>
                </div>
                {this.props.isopinion && this.OpinionLogged()}
                {!this.props.isopinion && this.Votelogged()}
              </div>
              {this.props.isopinion && this.OpinionButton()}
              {!this.props.isopinion && this.VoteButton()}
            </div>
          </div>
        </div>
        <div className="py-5 takeactions-mobile-design" style={{ backgroundColor: "#d4d4d4" }}>
          <div className="offset-sm-1 col-sm-10">
            <h2 className="font-weight-bold">Take more Actions</h2>
            <br />
            <TakeActions />

            <MediaQuery maxDeviceWidth={1000}>
              <button className="more-actions-button mt-4 btn" onClick={myFunc}>SEE MORE ACTIONS</button>
              <div style={{position:"relative",height:"10em"}}>
              <i className='fas fa-chevron-circle-up up-button-tablet-design' title="Go to top" onClick={()=>{window.scrollTo(0, 0);}} style={{position:"absolute",cursor: "pointer",top:"20%",left:"43%",display:"inline-block",margin:"10px auto",fontSize:"48px",borderRadius:"50%",border:"2px solid black",backgroundColor:"black",color:"white"}}></i>
              </div>
            </MediaQuery>
          </div>
        </div>
      </>
    );
  }

  Votelogged() {
    return (
      <div>
        <div className="mb-3">
          <div className="row ipad-options-design">
            <div className="col-sm-1 mt-2 ipad-bullets-design">
              <div
                className={`radio-button ${
                  this.state.selectedOptions.opt1 ? "bg-success" : ""
                }`}
                data-options="opt1"
                onClick={this.handleRadio.bind(this)}
              />
            </div>
            <div className="col-sm" style={{ fontSize: 10 }}>
              Option 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          {(this.state.auth && this.state.voted) && <div className="row mt-2">
            <div className="offset-sm-1 col-sm-10">
              <ProgressBar now={20} className="vote-bar" variant="success" />
            </div>
            <div className="col-sm percentage-label">20%</div>
          </div>}
        </div>
        <div className="mb-3">
          <div className="row ipad-options-design">
            <div className="col-sm-1 mt-2 ipad-bullets-design">
              <div
                className={`radio-button ${
                  this.state.selectedOptions.opt2 ? "bg-success" : ""
                }`}
                data-options="opt2"
                onClick={this.handleRadio.bind(this)}
              />
            </div>
            <div className="col-sm" style={{ fontSize: 10 }}>
              Option 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          {(this.state.auth && this.state.voted) && <div className="row mt-2">
            <div className="offset-sm-1 col-sm-10">
              <ProgressBar now={75} className="vote-bar" variant="success" />
            </div>
            <div className="col-sm-1 percentage-label">75%</div>
          </div>}
        </div>
        <div>
          <div className="row ipad-options-design">
            <div className="col-sm-1 mt-2 ipad-bullets-design">
              <div
                className={`radio-button ${
                  this.state.selectedOptions.opt3 ? "bg-success" : ""
                }`}
                data-options="opt3"
                onClick={this.handleRadio.bind(this)}
              />
            </div>
            <div className="col-sm" style={{ fontSize: 10 }}>
              Option 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          {(this.state.auth && this.state.voted) && <div className="row mt-2">
            <div className="offset-sm-1 col-sm-10">
              <ProgressBar now={5} className="vote-bar" variant="success" />
            </div>
            <div className="col-sm-1 percentage-label">5%</div>
          </div>}
        </div>
      </div>
    );
  }

  VoteButton() {
    return (
      <div className="mt-4" style={{ textAlign: "center" }}>
        {!(this.state.auth && this.state.voted) && (
          <button
            className="btn"
            style={{
              backgroundColor: "yellow",
              border: "none",
              color: "black",
              width: "230px",
              height: "50px"
            }}
          >
            {this.state.auth && !this.state.voted ? "VOTE" : "LOGIN TO VOTE"}
          </button>
        )}
        {this.state.auth && this.state.voted && (
          <div>
            <h4>
              <strong>Thank you for taking this action!</strong>
            </h4>
            <p
              style={{
                fontSize: 19,
                fontWeight: 500
              }}
              className="text-success"
            >
              You have earned 3 ActBit Coins
            </p>
            <button className="btn" style={{ width: "200px", height: "50px" }}>
              SEE YOUR WALLET
            </button>
          </div>
        )}
      </div>
    );
  }

  OpinionLogged() {
    return (
      <form className="m-0" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <textarea
            rows={6}
            style={{ width: "440px" }}
            className="form-control textarea-mobile-design"
            value={this.state.opinion}
            onChange={e => this.setState({ opinion: e.target.value })}
          />
        </div>
      </form>
    );
  }

  OpinionButton() {
    return (
      <div className="mt-4" style={{ textAlign: "center" }}>
        {!(this.state.auth && this.state.opinionSubmitted) && (
          <button
            className="btn"
            style={{
              backgroundColor: "yellow",
              border: "none",
              color: "black",
              width: "230px",
              height: "50px"
            }}
          >
            {this.state.auth && !this.state.opinionSubmitted
              ? "SEND OPINION"
              : "LOGIN TO SEND OPINION"}
          </button>
        )}
        {this.state.auth && this.state.opinionSubmitted && (
          <div>
            <h4>
              <strong>Thank you for taking this action!</strong>
            </h4>
            <p
              style={{
                color: "#66ff6b",
                fontSize: 19,
                fontWeight: 500
              }}
            >
              You have earned 3 ActBit Coins
            </p>
            <button className="btn" style={{ width: "200px", height: "50px" }}>
              SEE YOUR WALLET
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default VoteUnlogged;
