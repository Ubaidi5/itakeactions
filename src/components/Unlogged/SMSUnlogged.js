import React from "react";
import { Link } from "react-router-dom";
import TakeActions from "./TakeActions";

function TwitterUnlogged(props) {
  const [state, modify] = React.useState({
      auth:false,
      shared:false
  });
  return (
    <>
      <div className="mt-5">
        <div className="row mb-5">
          <div className="offset-sm-1 col-sm-5">
            <h3 className="font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fuga numquam eos porro rem.
            </h3>
            <div
              className="justify-text mb-4"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              accusantium voluptates quae dignissimos, asperiores doloribus
              soluta delectus earum obcaecati, ipsa ea deserunt quidem quis
              reprehenderit at tempora quisquam perspiciatis illo quasi
              cupiditate fugit blanditiis illum!</p>
              <p>Itaque fugit consequuntur ullam
              doloremque repellat sit reprehenderit ipsum quo, laudantium
              molestiae inventore. Hic amet est, dolorum soluta, laudantium
              nihil modi ullam sed, doloribus rerum debitis enim vel voluptatem
              nesciunt. Quasi, animi repellendus.</p>
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
            <div
              className="p-4 font-weight-bold"
              style={{
                backgroundColor: "#f2f0ed",
                fontSize: 12,
                borderRadius: 18
              }}
            >
              <p>Hic amet est, dolorum soluta, laudantium
              nihil modi ullam sed, doloribus rerum debitis enim vel voluptatem
              nesciunt.</p>
            </div>
            <div className="mt-4" style={{ textAlign: "center" }}>
              {!(state.auth && state.shared) && <button
                className="btn"
                style={{
                  backgroundColor: "yellow",
                  border: "none",
                  color: "black",
                  width: "250px",
                  height: "50px"
                }}
              >
                {(state.auth && !state.shared) ? 'SEND SMS' : 'LOGIN TO SEND SMS'}
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
        className="py-5"
        style={{ backgroundColor: "#d4d4d4" }}
      >
        <div className='offset-sm-1 col-sm-10'>
            <h2 className="font-weight-bold">Take more Actions</h2>
            <br />
            <TakeActions />
        </div>
      </div>
    </>
  );
}

export default TwitterUnlogged;
