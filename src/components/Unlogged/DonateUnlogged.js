import React from "react";
import { Link } from "react-router-dom";
import TakeActions from "./TakeActions";
import "../../styles/Unlogged/donate.css";

function DonateUnlogged(props) {
  const [state, modify] = React.useState({
    auth: false,
    donated: false,
    selectedDonations: {
      opt1: false,
      opt2: false,
      opt3: false,
      opt4: false
    }
  });
  const handleModification = e => {
    let obj = state.selectedDonations;
    switch (e) {
      case "₦1000":
        if (obj.opt1)
          obj = { opt1: false, opt2: false, opt3: false, opt4: false };
        else obj = { opt1: true, opt2: false, opt3: false, opt4: false };
        break;
      case "₦3000":
        if (obj.opt2)
          obj = { opt1: false, opt2: false, opt3: false, opt4: false };
        else obj = { opt1: false, opt2: true, opt3: false, opt4: false };
        break;
      case "₦5000":
        if (obj.opt3)
          obj = { opt1: false, opt2: false, opt3: false, opt4: false };
        else obj = { opt1: false, opt2: false, opt3: true, opt4: false };
        break;
      default:
        if (obj.opt4)
          obj = { opt1: false, opt2: false, opt3: false, opt4: false };
        else obj = { opt1: false, opt2: false, opt3: false, opt4: true };
    }
    modify({ ...state, selectedDonations: obj });
  };
  return (
    <>
      <div className="mt-5">
        <div className="row mb-5">
          <div className="offset-sm-1 col-sm-5">
            <h3 className="font-weight-bold">
              Donate to help get chairs and desks for Zabeyidna Primary School
            </h3>
            <div
              className="justify-text mb-4"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              <p>
                The only primary school in Zabeyidna Community of Niger State
                needs your urgent help. The school has no chair or desk for the
                253 children currently learning in the school. Through the
                school was established in 1992 but the government has not made
                any investment in the school other than the only 5 teachers in
                the school. And the four dilapidated classrooms in the school
                was built by the community as a self-help project.
              </p>
              <p>
                The cost of one complete set of chair/desk that will seat 3
                children in N7,000. We are raising N700,000to provide 100 of
                these chairs/desks to seat 300 children in the school. This will
                enable the children to be more comfortable while learning unlike
                the current situation as you can see in the image above. No
                child should be subjected to in this inhuman condition.
              </p>
              <p>
                Your donation will contribute to improving access to quality
                education for these children.
              </p>
            </div>
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
          <div className="col-sm-4 offset-sm-1">
            <div className="text-center mb-4">
              <strong>Please select your donation amount:</strong>
            </div>
            <div className="offset-sm-4">
              <div className="row mb-4">
                <div
                  className={`p-3 mr-4 col-sm-3 text-center donate-money ${state.selectedDonations.opt1?'bg-success text-light':''}`}
                  data-donation="₦1000"
                  onClick={e => handleModification(e.target.dataset.donation)}
                >
                  ₦1000
                </div>
                <div
                  className={`p-3 col-sm-3 text-center donate-money ${state.selectedDonations.opt2?'bg-success text-light':''}`}
                  data-donation="₦3000"
                  onClick={e => handleModification(e.target.dataset.donation)}
                >
                  ₦3000
                </div>
              </div>
              <div className="row">
                <div
                  className={`p-3 mr-4 col-sm-3 text-center donate-money ${state.selectedDonations.opt3?'bg-success text-light':''}`}
                  data-donation="₦5000"
                  onClick={e => handleModification(e.target.dataset.donation)}
                >
                  ₦5000
                </div>
                <div
                  className={`p-3 col-sm-3 text-center donate-money ${state.selectedDonations.opt4 ?'bg-success text-light':''}`}
                  data-donation="other"
                  onClick={e => handleModification(e.target.dataset.donation)}
                >
                  Other
                </div>
              </div>
            </div>
            <div className="mt-4" style={{ textAlign: "center" }}>
              {!(state.auth && state.donated) && (
                <button
                  className="btn"
                  style={{
                    backgroundColor: "yellow",
                    border: "none",
                    color: "black",
                    width: "250px",
                    height: "50px"
                  }}
                >
                  {state.auth && !state.donated ? "DONATE" : "LOGIN TO DONATE"}
                </button>
              )}
              {state.auth && state.donated && (
                <div>
                  <h4>
                    <strong>Thank you for taking this action!</strong>
                  </h4>
                  <p
                    className='text-success'
                    style={{ fontSize: 19, fontWeight: 500 }}
                  >
                    You have earned 10 ActBit Coins
                  </p>
                  <button
                    className="btn mb-2"
                    style={{ width: "200px", height: "50px" }}
                  >
                    SEE YOUR WALLET
                  </button><br />
                  <Link className='text-decoration-none text-success' style={{fontWeight:'600', fontSize:20}}>Donate again</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5" style={{ backgroundColor: "#d4d4d4" }}>
        <div className="offset-sm-1 col-sm-10">
          <h2 className="font-weight-bold">Take more Actions</h2>
          <br />
          <TakeActions />
        </div>
      </div>
    </>
  );
}

export default DonateUnlogged;
