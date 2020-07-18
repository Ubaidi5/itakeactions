import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import TakeActions from "./TakeActions";
import '../../styles/Unlogged/TwitterUnlogged.css'

function TwitterUnlogged(props) {
  const [state, modify] = React.useState({
      auth:false,
      shared:true
  });

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
          <div className="offset-sm-1 col-sm-5 ipad-design">
            <h3 className="font-weight-bold">
                Share an article with the new governor of Ogun State, Prince Dr. Dapo Abiodun to help St. Paul Primary School
            </h3>
            <p
              className="justify-text mb-4"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              According to Tracka,\"...pupils of St. Paul Primary School, a government-owned school in Ijokun community of Sagamu, Ogun State, are battling with the fate to learn under trees despite government's provision of N26 million to refurbish their classrooms...\" Read the full article here.<br />
              As an active citizen, we call on you today to share this article with the new governor of Ogun State,Prince Dr. Dapo Abiodun. This should be among his priorities as the new governor because no child deserves to learn in this inhuman condition.
            </p>
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
          <div className="col-sm-4 offset-sm-1 mobile-twitter-login ipad-design">
            <div
              className="p-4 font-weight-bold"
              style={{
                backgroundColor: "#f2f0ed",
                fontSize: 12,
                borderRadius: 18
              }}
            >
              <p>Your Excellency @dabiodunMFR, please take a look at this article by @TrackaNG. Please add this to the list of schools to be refurbished as ypu have resumed office as @ogun_state governor. Thank you. <Link to='http://bit.ly/2PRsnA5' className='text-decoration-none' style={{color:'black'}}>http://bit.ly/2PRsnA5</Link></p>
            </div>
            <div className="mt-4" style={{ textAlign: "center" }}>
              {!(state.auth && state.shared) && <button
                className="btn"
                style={{
                  backgroundColor: "yellow",
                  border: "none",
                  color: "black",
                  width: "230px",
                  height: "50px"
                }}
              >
                {(state.auth && !state.shared) ? 'SHARE TWEET' : 'LOGIN TO SHARE TWITTER'}
              </button>}
              {(state.auth && state.shared) && <div>
                <h4><strong>Thank you for taking this action!</strong></h4>
                <p style={{color:'#66ff6b',fontSize:19,fontWeight:500}}>You have earned 1 ActBit Coins</p>
                <button className='btn' style={{width:'200px',height:'50px'}}>SEE YOUR WALLET</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5 takeactions-mobile-design"
        style={{ backgroundColor: "#d4d4d4" }}
      >
        <div className='offset-sm-1 col-sm-10'>
            <h2 className="font-weight-bold">Take more Actions</h2>
            <br />
            <TakeActions />

            <MediaQuery maxDeviceWidth={1000}>
              <button className="more-actions-button mt-4 btn mybutton" onClick={myFunc}>SEE MORE ACTIONS</button>
              <div style={{position:"relative",height:"10em"}}>
              <i className='fas fa-chevron-circle-up up-button-tablet-design' title="Go to top" onClick={()=>{window.scrollTo(0, 0);}} style={{position:"absolute",cursor: "pointer", top:"20%",left:"43%",display:"inline-block",margin:"10px auto",fontSize:"48px",borderRadius:"50%",border:"2px solid black",backgroundColor:"black",color:"white"}}></i>
              </div>
            </MediaQuery>
        </div>
      </div>
    </>
  );
}




export default TwitterUnlogged;